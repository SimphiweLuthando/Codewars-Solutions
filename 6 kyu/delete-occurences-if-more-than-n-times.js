function deleteNth(arr,n){
    // ...
      let cache = {};
    return arr.filter((x) => {
      cache[x] = (cache[x]||0) + 1;
      return cache[x] <= n;
    });
  }