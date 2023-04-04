import {
    buttonSoundFirePlace,
    buttonSoundCoffee,
    buttonSoundForrest,
    buttonSoundRain,
    buttonLess,
    buttonPlus,
    buttonStop,
    buttonPlay
} from './elements.js'

export default function ({
    controls,
    timer,
    sound
}) {


    buttonSoundCoffee.addEventListener('click', function () {
    });

    buttonSoundFirePlace.addEventListener('click', function () {
    });

    buttonSoundForrest.addEventListener('click', function () {
    });

    buttonSoundRain.addEventListener('click', function () {
    });

    buttonLess.addEventListener('click', function (minutes) {

        minutes = Number(displayMinutes.textContent) - 5
        if (minutes >= 1) {
            displayMinutes.textContent = String(minutes).padStart(2, '0')

        }

    });

    buttonPlus.addEventListener('click', function (minutes) {
        minutes =
            displayMinutes.textContent = String(Number(displayMinutes.textContent) + 5).padStart(2, '0')

        console.log('clicou +')
    })

    buttonStop.addEventListener('click', function () {
        console.log('clicou stop')
        //bgSoundForrest.Stop()
        clearTimeout(timerTimeOut)
    });

    buttonPlay.addEventListener('click', function () {
        countDown()
    });
}
