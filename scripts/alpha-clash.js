// function play(){
//     // step-1: Hide the home screen. to hide the screen add the class hidden to the home screen
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     // step-2: Show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList);
// }

function continueGame(){
    //  step-1: generate a rendom alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}


function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame('')
}
