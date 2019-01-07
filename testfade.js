let nowPlaying = 0;
let audio = new Audio('./Music/Kiiara - Gold (Official Video).mp3');
let audio2 = new Audio("./Music/Blake Shelton - Turnin' Me On (Audio Video).mp3");
let audio3 = new Audio("./Music/Da Baby.mp3")
let myMusic = [audio, audio2, audio3]

function play() { 
    document.querySelector(".turn-table").src="pink-vinyl.gif"
    if (myMusic[nowPlaying + 1].currentTime > 11){
        myMusic[nowPlaying + 1].play();
    }
    else {myMusic[nowPlaying].play()};
}
function stop() {
    document.querySelector(".turn-table").src="turntable.jpeg"
    myMusic[nowPlaying].pause();
    myMusic[nowPlaying + 1].pause();
}

// starts the fading in of the first song
function startFade(vol) {
    console.log('current time',myMusic[nowPlaying].currentTime);
    console.log(myMusic[nowPlaying].duration)
    if (myMusic[nowPlaying].currentTime  > myMusic[nowPlaying].duration - 10) {
        start(1)
        let newVolume = ( (vol * ((myMusic[nowPlaying-1].duration-myMusic[nowPlaying-1].currentTime)/10)) > 0.1) ? (vol * ((myMusic[nowPlaying-1].duration-myMusic[nowPlaying-1].currentTime)/20))-.1 : 0;
    if(newVolume < 0){
        newVolume = 0;
    }
        myMusic[nowPlaying-1].volume = newVolume
        console.log('audio volume',myMusic[nowPlaying-1].volume)
        console.log('fade')
 
    }
}

// start function to start a new song
function start(vol) {
    nowPlaying ++
    myMusic[nowPlaying].currentTime =200;
    myMusic[nowPlaying].volume = vol
    myMusic[nowPlaying].play()
    myMusic[nowPlaying].addEventListener("timeupdate",()=>{fadeIn()})
    myMusic[nowPlaying].addEventListener("timeupdate",()=>{startFade(audioVolume)}) 

}


function fadeIn() {
    
    console.log('current time 2',myMusic[nowPlaying + 1].currentTime);
    console.log(myMusic[nowPlaying + 1].duration)

    let avol = 0

    if (myMusic[nowPlaying + 1].volume < 1) {

        avol = myMusic[nowPlaying + 1].currentTime/100;
        if(avol >= 1) avol = 1;
        myMusic[nowPlaying + 1].volume = avol;
        console.log('avol: ', avol);

    }


}

   
    // if (myMusic[nowPlaying + 1].currentTime  > myMusic[nowPlaying + 1].duration - 10) {
    //     myMusic[nowPlaying + 1].volume = ( (vol * ((myMusic[nowPlaying + 1].duration-myMusic[nowPlaying + 1].currentTime)/10))-.1 > 0.1) ? (vol * ((myMusic[nowPlaying + 1].duration-myMusic[nowPlaying + 1].currentTime)/20))-.1 : 0;
    //     console.log('audio volume 2',myMusic[nowPlaying + 1].volume)
    //     console.log('fade2')
    //     }
    // }

// myMusic[nowPlaying].timeupdate(startFade);
// console.log('Audio',audio)
myMusic[nowPlaying].currentTime =200;
let audioVolume = myMusic[nowPlaying].volume;
myMusic[nowPlaying].addEventListener("timeupdate",()=>{startFade(audioVolume)}) 
myMusic[nowPlaying + 1].currentTime =250;
console.log(myMusic[nowPlaying + 1].currentTime)
myMusic[nowPlaying + 1].currentTime =11;
console.log(myMusic[nowPlaying + 1].currentTime)
// let myMusic[nowPlaying + 1]Volume = 0;
// myMusic[nowPlaying].addEventListener("timeupdate2",()=>{fadeIn(myMusic[nowPlaying + 1]Volume)}) 

    

window.onload = function() {
    let playButton = document.getElementById('play');
    playButton.addEventListener('click',play);
    let stopButton = document.getElementById('stop');
    stopButton.addEventListener('click',stop);
    }