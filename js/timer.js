export default function Timer(
    { displayMinutes,
      displaySeconds, 
      reset,
      minutes }
) {
    let timerTimeOut

    function reset() {
        updateDisplay(minutes, 0)
        
        clearTimeout(timerTimeOut)
        
    }
    
    function updateDisplay(minutes, seconds) {
        displayMinutes.textContent = String(minutes).padStart(2, '0')
        displaySeconds.textContent = String(seconds).padStart(2, '0')
    }
    function countDown() {
        timerTimeOut = setTimeout(function() {
            let minutes = Number(displayMinutes.textContent)
            let seconds = Number(displaySeconds.textContent)


            
            if(seconds <= 0) {
                if (minutes == 0) {
                    reset()
                    return
                }
                seconds = 5
                minutes -= 1
                
            }
            
            
            updateDisplay(minutes, seconds-1)
            
            countDown()
            
        }, 1000 )
    }
 
    function updateMinutes(newMinutes) {
        minutes = newMinutes

    }

    function hold() {
        clearTimeout(timerTimeOut)
    }
    return { countDown, reset, updateDisplay, updateMinutes, hold }
    
}

// import Sounds from './sounds.js';

// export default function Timer(
//     {   minutesDisplay,
//         secondsDisplay
//         //,
//         //resetControls

//     }
// ) {

   
//     let timerTimeOut
//     let minutes = Number(minutesDisplay.textContent)
   
//     function updateDisplay(newMinutes, seconds) {

//         newMinutes = newMinutes === undefined ? minutes : newMinutes
//         seconds = seconds === undefined ? 0 : seconds
       
//         minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
//         secondsDisplay.textContent = String(seconds).padStart(2, '0')

//     }
//     function reset() {
//         updateDisplay(minutes, 0)
//         clearTimeout(timerTimeOut)


//     }
//     function countDown(minutes) {
//         minutes = Number(displayMinutes.textContent)
//         let seconds = Number(displaySeconds.textContent)

//         console.log(minutes, seconds)



//         timerTimeOut = setTimeout(function () {
//             if (minutes <= 0 && seconds <= 0) {
//                 return
//             }


//             if (seconds <= 0) {
//                 seconds = 59
//                 --minutes

//             } else {
//                 --seconds
//             }

//             displayMinutes.textContent = String(minutes).padStart(2, '0')
//             displaySeconds.textContent = String(seconds).padStart(2, '0')


//             countDown()

//         }, 1000)


//     }

//     return {
//         countDown, reset, updateDisplay
//         //, updateMinutes, hold
//     }

// }