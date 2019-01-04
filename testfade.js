let audio = new Audio('./Music/Kiiara - Gold (Official Video).mp3');
let audio2 = new Audio("./Music/Blake Shelton - Turnin' Me On (Audio Video).mp3");
function playPause(e) {
    if (this.textContent == 'Play') {
        audio.play();
        this.textContent == 'Pause';
    } else {
        audio.pause();
        this.textContent = 'Play';
    }
}
window.onload = function() {
    var a = document.getElementById('play');
    a.addEventListener('click',playPause,false);
}
// starts the fading in of the first song
function startFade(vol) {
    console.log('current time',audio.currentTime);
    console.log(audio.duration)
    if (audio.currentTime  > audio.duration - 10) {
        start(0)
        let newVolume = ( (vol * ((audio.duration-audio.currentTime)/10)) > 0.1) ? (vol * ((audio.duration-audio.currentTime)/20))-.1 : 0;
    if(newVolume < 0){
        newVolume = 0;
    }
        audio.volume = newVolume
        console.log('audio volume',audio.volume)
        console.log('fade')
 
    }
}

// start function to start a new song
function start(vol) {
    audio2.volume = vol
    audio2.play()
    audio2.addEventListener("timeupdate",()=>{fadeIn()})
}


function fadeIn() {
    
    console.log('current time 2',audio2.currentTime);
    console.log(audio2.duration)

    let avol = 0

    if (audio2.volume < 1) {

        avol = audio2.currentTime/100;
        if(avol >= 1) avol = 1;
        audio2.volume = avol;
        console.log('avol: ', avol);

    }


}

   
    // if (audio2.currentTime  > audio2.duration - 10) {
    //     audio2.volume = ( (vol * ((audio2.duration-audio2.currentTime)/10))-.1 > 0.1) ? (vol * ((audio2.duration-audio2.currentTime)/20))-.1 : 0;
    //     console.log('audio volume 2',audio2.volume)
    //     console.log('fade2')
    //     }
    // }

// audio.timeupdate(startFade);
// console.log('Audio',audio)
audio.currentTime =200;
let audioVolume = audio.volume;
audio.addEventListener("timeupdate",()=>{startFade(audioVolume)}) 
audio2.currentTime =100;
// let audio2Volume = 0;
// audio.addEventListener("timeupdate2",()=>{fadeIn(audio2Volume)}) 

    
