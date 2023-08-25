function delayedPromise(value, delay){
  return setTimeout(()=>{
     Promise.reject(value)
   }, delay)
}


delayedPromise(300, 2000).then(succes => console.log(succes))

const arr = [
    delayedPromise(300, 2000)
    .then(succes => console.log(succes)),

    delayedPromise("hello", 7000)
    .then(succes => console.log(succes)),
    
    delayedPromise(500, 8000)
    .then(succes => console.log(succes)),
    
    delayedPromise("Result", 5000)
    .then(succes => console.log(succes)),
    
    delayedPromise("How are you", 3000)
    .then(succes => console.log(succes)),
]

Promise.all(arr)
.then(value => console.log(value))









