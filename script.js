'use strict'

//let user = prompt('please enter your name ')
//document.querySelector('.mem').textContent = `Welcome ${user} to my guessing game`

const secretNumber = Math.trunc(Math.random()*20+1)

//document.querySelector('.secretNumber').textContent = secretNumber
//comment by add-js-content branch
document.querySelector('.check').addEventListener
('click', function () {
   const guess = Number(document.querySelector('.guess').value)
   console.log(guess, typeof guess)
    
   if(!guess){
    document.querySelector('.message').textContent = '⛔️ No number!'
   }else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.number').style.width = '26rem'
   }else if(guess > secretNumber) {
    document.querySelector('.message').textContent= "📈 Too high"
   }else if (guess < secretNumber) {
      document.querySelector('.message').textContent = "📉 Too low"
   }
})


    



