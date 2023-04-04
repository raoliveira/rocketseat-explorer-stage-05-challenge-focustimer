import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay            = document.querySelector('.play')
const buttonPause            = document.querySelector('.pause')
const buttonStop            = document.querySelector('.stop')
const buttonPlus            = document.querySelector('.plus')
const buttonLess            = document.querySelector('.less')

const buttonSoundForrest    = document.querySelector('.forrest')
const buttonSoundRain       = document.querySelector('.rain')
const buttonSoundCoffee     = document.querySelector('.coffee')
const buttonSoundFirePlace  = document.querySelector('.fireplace')

let displayMinutes        = document.querySelector('.minutes')
let displaySeconds        = document.querySelector('.seconds')

let minutes = 6
let seconds = 0



const timer = Timer({ displayMinutes,
    displaySeconds, 
    minutes 
    })

const controls = Controls({
    buttonPlay,
    buttonPause
})






buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countDown()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    //clearTimeout(timerTimeOut)

})

buttonStop.addEventListener('click', function() {
    console.log('entrou stop')

    controls.reset()
    timer.reset()



})

buttonPlus.addEventListener('click', function() {
    console.log('entrou buttonPlus')
    let minutes = Number(displayMinutes.textContent)

    //displayMinutes.textContent = String(minutes + 5).padStart(2, '0')
    timer.updateMinutes(minutes+5)

    timer.updateDisplay(minutes+5, seconds)

})
buttonLess.addEventListener('click', function() {
    console.log('entrou buttonLess')
    let minutes = Number(displayMinutes.textContent)
    console.log('a',minutes);
    //displayMinutes.textContent = String(minutes - 5).padStart(2, '0')
    if (minutes <= 5) {
        minutes = 6
    }
    console.log('b',minutes);
    timer.updateMinutes(minutes-5)

    timer.updateDisplay(minutes-5, seconds)


})
buttonSoundForrest.addEventListener('click', function() {
    console.log('entrou buttonSoundForrest')
})
buttonSoundRain.addEventListener('click', function() {
    console.log('entrou buttonSoundRain')
})
buttonSoundCoffee.addEventListener('click', function() {
    console.log('entrou buttonSoundCoffee')
})
buttonSoundFirePlace.addEventListener('click', function() {
    console.log('entrou buttonSoundFirePlace')
})

