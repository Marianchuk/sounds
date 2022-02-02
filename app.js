window.onload = function() {
    console.log("Let's start");

    addButtonsClickHandler();
    
    
    
}



const audio = document.querySelector('audio');


function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}

const addButtonsClickHandler = () => {
    document.querySelector('.buttons').addEventListener('click', (e) => {
    if(e.target.classList.contains('stop')){
        pauseAudio()
        let isPlay = false;
    } else if (e.target.classList.contains('play')) {
        playAudio()
        let isPlay = true;
        console.log(e)
    }
})
}
