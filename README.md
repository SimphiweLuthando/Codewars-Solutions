# Codewars-Solutions

This is a repo of all the codewars solutions of all the katas I've completed on codewars.

## How It's Made

***Tech used: *** JavaScript, Markdown

These challenges range from 8kyu down to the lower kyus as I progessed on in the challenges. You will see a lot of built in properties and methods that are extensively used and hopefully you can learn a few new ones and use them in your next project

## Optimizations

You will notice that some of the challenges have an accompanying markdown that explains what the challenge is all about. I then reverted to ommitting the markdown as it made it less effecient to push more solutions onto the repo

## Lessons - Learned

I got to really see how extensive the built in methods and properties are and that I don't have to reinvent the wheel alot of the time. 

You learn the most by doing and that is what has helped me through the journey

## Example

```js
function tribonacci(signature,n){
    //your code here
    for (let i = 0; i < n-3; i++) { 
      signature.push(signature[i] + signature[i+1] + signature[i+2]); 
    }
    return signature.slice(0, n); 
  }
```
