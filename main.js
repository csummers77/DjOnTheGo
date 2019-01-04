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
// audio.currentTime =200;
window.onload = function() {
    var a = document.getElementById('stop');
    a.addEventListener('click',playPause,false);
}
let audioVolume = audio.volume;
audio.addEventListener("timeupdate",()=>{startFade(audioVolume)}) 
onvolumechange

// function func1() {
//     alert("This is the first.");
//   }
//   function func2() {
//     alert("This is the second.");
//   }
  
//   function addLoadEvent(func) {
//     var oldonload = window.onload;
//     if (typeof window.onload != 'function') {
//       window.onload = func;
//     } else {
//       window.onload = function() {
//         if (oldonload) {
//           oldonload();
//         }
//         func();
//       }
//     }
//   }
//   addLoadEvent(func1);
//   addLoadEvent(func2);
//   addLoadEvent(function() {
//       document.body.style.backgroundColor = '#EFDF95';
//   })
  

