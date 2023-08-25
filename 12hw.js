function delayedPromise(value, delay){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(value)
      }, delay)
  })
}


// delayedPromise(300, 2000).then(succes => console.log(succes))

const arr = [
    delayedPromise("hello", 2000),

    delayedPromise("hello", 4000), 
    
    delayedPromise('hello', 3000),
    
    delayedPromise("Result", 5000),
    
    delayedPromise("How are you", 3000),
]

Promise.all(arr)
.then(value => console.log(value))


// №2
// function randomDelay(value){
//     const min = 1000
//     const max = 5000
// const number = Math.floor(Math.random() * (max - min + 1) + min)

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        resolve(value)
//     }, number)

    
// })
// }





