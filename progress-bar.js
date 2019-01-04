$(document).ready(function(){
    let counter = 0;
    let numOfTracks = $('./Music/Kiiara - Gold (Official Video).mp3').length;
    $(".play").click(function(){
        $('./Music/Kiiara - Gold (Official Video).mp3')[counter].play();
        $("#message").text("Music began");
    })
})