let audio = new Audio('./Music/Kiiara - Gold (Official Video).mp3');

function play() { 
        document.querySelector(".turn-table").src="pink-vinyl.gif"
        audio.play();
}
function stop() {
    audio.pause();
    document.querySelector(".turn-table").src="turntable.jpeg"
}

window.onload = function() {
    let playButton = document.getElementById('play');
    playButton.addEventListener('click',play);
    let stopButton = document.getElementById('stop');
    stopButton.addEventListener('click',stop);
}
function startFade(vol) {
    console.log('current time',audio.currentTime);
    console.log(audio.duration)
   if (audio.currentTime  > audio.duration - 10) {
       
       audio.volume = vol * ((audio.duration-audio.currentTime)-1)
       console.log('fade')
       console.log('audio volume',audio.volume)
   }
//    setInterval(() => {
       
//    }, interval);
}
// audio.timeupdate(startFade);
// console.log('Audio',audio)
audio.currentTime =200;

let audioVolume = audio.volume;
audio.addEventListener("timeupdate",()=>{startFade(audioVolume)}) 
onvolumechange

