let audio = new Audio('./Music/Kiiara - Gold (Official Video).mp3');

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
function startFade() {
    let audioVolume = 0.9
    console.log('current time',audio.currentTime);
    console.log(audio.duration)
   if (audio.currentTime < audio.duration - 10) {
       audio.volume -=.5
   }
}
// audio.timeupdate(startFade);
// console.log('Audio',audio)

audio.addEventListener("timeupdate",startFade) 

