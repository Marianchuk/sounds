window.onload = function() {
    console.log("Let's start");
    addBirdsClickHandler();
}

const audio = document.querySelector('audio');
const button = document.querySelector('.button');
const birds = document.querySelector('.birds')
const cover =document.querySelector('.cover__img')

let isPlay = false;



function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}


button.addEventListener('click', function() {
    if(!isPlay){
        playAudio()
        isPlay = true;
        button.classList.add('pause');
    } else {
        pauseAudio()
        isPlay = false;
        button.classList.remove('pause');
    }
})





let playlist = [
    'forest.mp3',
    'solovey.mp3',
    'drozd.mp3',
    'zarynka.mp3',
    'javoronok.mp3',
    'slavks.mp3',
    
    
];
let songIndex = 0;
/*
function loadSong(song) {
    birds.innerHTNL = song
    audio.src = `audio/${song}.mp3`
    cover.src = `img/${songIndex + 1}.jpg`
}
loadSong(song[songIndex])
*/

const addBirdsClickHandler = () => {
    birds.addEventListener('click', (e) => {
        let name = e.target.classList
            audio.src = `audio/${name}.mp3`
            cover.src = `img/${name}.jpg`
            isPlay = false;
            button.classList.remove('pause');

    })
}