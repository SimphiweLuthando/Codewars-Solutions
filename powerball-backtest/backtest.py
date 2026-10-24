"""Backtest "prediction" strategies on South African PowerBall draws.

Input: a CSV with columns  date,n1,n2,n3,n4,n5,powerball
Usage: python3 backtest.py draws.csv [--pool 50] [--pb-pool 20] [--since YYYY-MM-DD]

How it works
- Draws are sorted oldest to newest.
- For each draw in the test period, a strategy only sees draws BEFORE it
  (no peeking at the future), then picks 5 main numbers + 1 powerball.
- We count how many main numbers match, and whether the powerball matches.
- We compare each strategy to a plain random picker (the baseline).
"""
import argparse
import sys

import numpy as np
import pandas as pd

rng = np.random.default_rng(42)


def load(path, pool, pb_pool, since):
    df = pd.read_csv(path, parse_dates=["date"]).sort_values("date")
    if since:
        df = df[df["date"] >= since]
    mains = df[["n1", "n2", "n3", "n4", "n5"]].to_numpy()
    pb = df["powerball"].to_numpy()
    if mains.min() < 1 or mains.max() > pool or pb.min() < 1 or pb.max() > pb_pool:
        sys.exit(
            f"Numbers outside 1-{pool} / 1-{pb_pool}. The game's rules changed over time; "
            "use --since with the date of the current format."
        )
    return mains, pb


# Each strategy gets the past draws and returns (5 main numbers, 1 powerball).
def random_pick(past_m, past_pb, pool, pb_pool):
    return rng.choice(np.arange(1, pool + 1), 5, replace=False), rng.integers(1, pb_pool + 1)


def hot_pick(past_m, past_pb, pool, pb_pool):
    """Most frequently drawn numbers so far."""
    counts = np.bincount(past_m.ravel(), minlength=pool + 1)[1:]
    pb_counts = np.bincount(past_pb, minlength=pb_pool + 1)[1:]
    return np.argsort(-counts)[:5] + 1, int(np.argmax(pb_counts)) + 1


def overdue_pick(past_m, past_pb, pool, pb_pool):
    """Numbers that have gone the longest without appearing."""
    last_seen = np.full(pool + 1, -1)
    for i, row in enumerate(past_m):
        last_seen[row] = i
    pb_last = np.full(pb_pool + 1, -1)
    for i, v in enumerate(past_pb):
        pb_last[v] = i
    return np.argsort(last_seen[1:])[:5] + 1, int(np.argmin(pb_last[1:])) + 1


STRATEGIES = {"random (baseline)": random_pick, "hot numbers": hot_pick, "overdue numbers": overdue_pick}


def run(mains, pb, pool, pb_pool, test_frac=0.2):
    split = int(len(mains) * (1 - test_frac))
    n_test = len(mains) - split
    print(f"{len(mains)} draws total, testing on the last {n_test}\n")
    print(f"{'strategy':<20}{'avg main matches':>18}{'powerball hit %':>18}")
    for name, fn in STRATEGIES.items():
        main_hits, pb_hits = [], []
        for i in range(split, len(mains)):
            pick_m, pick_pb = fn(mains[:i], pb[:i], pool, pb_pool)
            main_hits.append(len(set(pick_m) & set(mains[i])))
            pb_hits.append(pick_pb == pb[i])
        print(f"{name:<20}{np.mean(main_hits):>18.3f}{100 * np.mean(pb_hits):>17.1f}%")
    print(
        f"\nPure luck predicts: {5 * 5 / pool:.3f} main matches, "
        f"{100 / pb_pool:.1f}% powerball hits."
    )


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("csv")
    ap.add_argument("--pool", type=int, default=50)
    ap.add_argument("--pb-pool", type=int, default=20)
    ap.add_argument("--since", default=None)
    a = ap.parse_args()
    m, p = load(a.csv, a.pool, a.pb_pool, a.since)
    run(m, p, a.pool, a.pb_pool)
