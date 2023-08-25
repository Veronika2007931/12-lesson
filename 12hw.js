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


// №2
function randomDelay(value){
    const min = 1000
    const max = 5000
const number = Math.floor(Math.random() * (max - min + 1) + min)

setTimeout(()=>{
    Promise.reject(value)
}, number)
}






