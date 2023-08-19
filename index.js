
// Promise.resolve('hello').then(res => console.log(res))
// console.log(promise.resolve('hello'));


const button = document.querySelector(".js-start-race")
const winner = document.querySelector(".js-winner")
const progress = document.querySelector('.js-progress')
const table = document.querySelector('.js-results-table>tbody')



const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
  ];

  let x = 0
  function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
 
  function run (horse){
    const time = getRandomTime(1500, 2500)

    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({horse,time})
        },time)
    })
}

refs.button.addEventListener('click', ()=>{
    x++
    refs.button.innerHTML ='Заїзд розпочався';
    const promisesArr = horses.map(horse => run(horse))
console.log(` Заїзд розпочався, ставки не приймаються!`)
Promise.race(promisesArr).then(({horse, time}) => {
refs.winner.textContent = `Переможець ${horse}, финишував за ${time} мс часу`
const tr = `<tr><td>0</td><td>${horse}</td><td>${time}</td><tr>`
refs.table.insertAdjacentHTML('beforeend', tr)
})
    Promise.all(promisesArr).then(()=>{
        refs.progress.innerHTML = 'Заїзд закінчився'
    })
})





