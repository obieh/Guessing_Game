'use strict'

const secretNumber = Math.trunc(Math.random()*20+1)

document.querySelector('secretNumber').textContent = secretNumber

document.querySelector('.check').addEventListener
('click', function () {
   console.log(document.querySelector('.guess').value)
   console.log(guess, typeof guess)
    
   if(!guess){
    document.querySelector('message').textContent = 'No secretNumber!'
   }else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number'
   }
})


    



