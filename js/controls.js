export default function Controls({
    buttonPlay,
    buttonPause
}) {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }
    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }
    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')

       
    }


    return { reset, play, pause }

}


// export default function Controls(
//     {
//         buttonPlay,
//         buttonLess,
//         buttonPlus,
//         buttonSoundCoffee,
//         buttonSoundFirePlace,
//         buttonSoundForrest,
//         buttonSoundRain,
//         buttonStop
//     }
// ) {
//     function play() {
        
//     }
//     function stop() {

       
//     }
//     function plus() {

        
//     }
//     function less() {

        
//     }

//     /* Sounds controls */
//     function soundForrest() {

        
//             buttonSoundForrest.classList.toggle('play');
//             buttonSoundRain.classList.remove('play');
//             buttonSoundCoffee.classList.remove('play');
//             buttonSoundFirePlace.classList.remove('play');
//             console.log('buttonSoundForrest -')
//             const bgSoundForrest = new Audio('../sounds/Floresta.wav')
//             bgSoundForrest.loop = true;
//             bgSoundForrest.play();
//     }
//     function soundRain() {

       
//             buttonSoundRain.classList.toggle('play');
//             buttonSoundForrest.classList.remove('play');
//             buttonSoundCoffee.classList.remove('play');
//             buttonSoundFirePlace.classList.remove('play');
//             console.log('buttonSoundRain -')
//     }

//     function soundCoffee() {

        
//             buttonSoundCoffee.classList.toggle('play');
//             buttonSoundRain.classList.remove('play');
//             buttonSoundForrest.classList.remove('play');
//             buttonSoundFirePlace.classList.remove('play');
//             console.log('buttonSoundCoffee -')
//     }
//     function soundFirePlace() {

//         buttonSoundFirePlace.classList.toggle('play');
//         buttonSoundCoffee.classList.remove('play');
//         buttonSoundRain.classList.remove('play');
//         buttonSoundForrest.classList.remove('play');
//         console.log('buttonSoundFirePlace -')
        
//     }

//     return {
//         play,
//         stop,
//         plus,
//         less,
//         soundForrest,
//         soundRain,
//         soundCoffee,
//         soundFirePlace
//     }
// }