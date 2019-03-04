let nowPlaying = 0;
let audio2 = new Audio('./Music/Kiiara - Gold (Official Video).mp3');
let audio3 = new Audio("./Music/Blake Shelton - Turnin' Me On (Audio Video).mp3");
let audio5 = new Audio("./Music/Lorde - Royals (US Version).mp3");
let audio = new Audio("./Music/Indeep - Last Night A D.J. Saved My Life (1983).mp3");
let audio4 = new Audio("./Music/Wolfgang Ambros - Zwickts Mi.mp3");

let myMusic = [audio, audio3, audio5]


function play() { 
    document.querySelector(".turn-table").src="./images/NewTurntable.gif"
    if (myMusic[nowPlaying + 1].currentTime > 11){
        myMusic[nowPlaying + 1].play();
    }
    else {myMusic[nowPlaying].play()};
    var counter = Math.floor(audio.duration) ;
    
  function songCounter() {
     let minutes = Math.floor(counter/60);
     // let seconds = counter<10 ? "0" + counter%60 : counter%60;
     let seconds;
     if (counter%60 < 10){
        seconds = "0" + counter%60;
     } else {
        seconds = counter%60;
     }
     document.querySelector(".span").textContent =
        `${minutes}:${seconds}`
     counter = counter - 1
  }
  setInterval(songCounter, 1000);
}
function stop() {
    document.querySelector(".turn-table").src="./images/NewTurntable.jpg"
    myMusic[nowPlaying].pause();
    myMusic[nowPlaying + 1].pause();
}

// starts the fading in of the first song
function startFade(vol) {
    let fadeSong = nowPlaying
    console.log('current time',myMusic[nowPlaying].currentTime);
    console.log(myMusic[nowPlaying].duration)
    if (myMusic[nowPlaying].currentTime  > myMusic[nowPlaying].duration - 10) {
        start(1)
        let newVolume = ( (vol * ((myMusic[fadeSong].duration-myMusic[fadeSong].currentTime)/10)) > 0.1) ? (vol * ((myMusic[fadeSong].duration-myMusic[fadeSong].currentTime)/20))-.1 : 0;
    if(newVolume < 0){
        newVolume = 0;
    }
        myMusic[fadeSong].volume = newVolume
        console.log('audio volume',myMusic[fadeSong].volume)
        console.log('fade') 
    }
}

// start function to start a new song
function start(vol) {
    nowPlaying ++
    if (nowPlaying === myMusic.length){
        nowPlaying = 0
    }
    myMusic[nowPlaying].currentTime = myMusic[nowPlaying].duration -20;
    myMusic[nowPlaying].volume = vol
    myMusic[nowPlaying].play()
    myMusic[nowPlaying].addEventListener("timeupdate",()=>{fadeIn()})
    myMusic[nowPlaying].addEventListener("timeupdate",()=>{startFade(audioVolume)}) 
}

function fadeIn() {
    if (nowPlaying > myMusic.length){
        nowPlaying = 0
    }
    console.log('current time 2',myMusic[nowPlaying].currentTime);
    console.log(myMusic[nowPlaying].duration)

    let avol = 0

    if (myMusic[nowPlaying].volume < myMusic[nowPlaying] - 20) {
        avol = (myMusic[nowPlaying].currentTime-(myMusic[nowPlaying].duration -20))/100;
        if(avol >= 1) avol = 1;
        myMusic[nowPlaying].volume = avol;
        console.log('avol: ', avol);
    }
}

myMusic[nowPlaying].currentTime = 215;
let audioVolume = myMusic[nowPlaying].volume;
myMusic[nowPlaying].addEventListener("timeupdate",()=>{startFade(audioVolume)}) 
// myMusic[nowPlaying + 1].currentTime = 0;
// console.log(myMusic[nowPlaying + 1].currentTime)
// myMusic[nowPlaying + 1].currentTime = 0;
// console.log(myMusic[nowPlaying + 1].currentTime)
    

window.onload = function() {
    let playButton = document.getElementById('play');
    playButton.addEventListener('click',play);
    let stopButton = document.getElementById('stop');
    stopButton.addEventListener('click',stop);
    }