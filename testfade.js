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
function startFade(vol) {
    console.log('current time',audio.currentTime);
    console.log(audio.duration)
    if (audio.currentTime  > audio.duration - 10) {
        fadeIn(vol)
        audio.volume = ( (vol * ((audio.duration-audio.currentTime)/10)) > 0.1) ? (vol * ((audio.duration-audio.currentTime)/20))-.1 : 0;
        console.log('audio volume',audio.volume)
        console.log('fade')
 
    }
}
function fadeIn(vol) {
    audio2.play()
    console.log('current time 2',audio2.currentTime);
    console.log(audio2.duration)
    if (audio2.currentTime  > audio2.duration - 10) {
        audio2.volume = ( (vol * ((audio2.duration-audio2.currentTime)/10))-.1 > 0.1) ? (vol * ((audio2.duration-audio2.currentTime)/20))-.1 : 0;
        console.log('audio volume 2',audio2.volume)
        console.log('fade2')
        }
    }

// audio.timeupdate(startFade);
// console.log('Audio',audio)
audio.currentTime =200;
let audioVolume = audio.volume;
audio.addEventListener("timeupdate",()=>{startFade(audioVolume)}) 
audio2.currentTime =100;
let audio2Volume = audio2.volume;
audio.addEventListener("timeupdate2",()=>{fadeIn(audio2Volume)}) 

    
