// console.log("sanity check")
// https://getsongbpm.com/api

// All api calls go to the this link
// 
// Web API Base URL: https://api.getsongbpm.com
// Method: GET
// Get the BPM of "Highway to hell" by "AC/DC".
// curl -X GET "https://api.getsongbpm.com/song/?api_key=YOUR_API_KEY_HERE&id=983pB"
 
const apiBaseUrl = "https://api.getsongbpm.com"
    // All images use this link - not using images
// const imageBaseUrl = 'http://image.tmdb.org/t/p/';

const nowPlayingUrl = `${apiBaseUrl}/song/?api_key=${apiKey}`
$.getJSON(nowPlayingUrl, (songData)=>{
    // console.log(songData);
    songData.results.forEach((song)=>{
        const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`
        const newHTML = `
            <div class="col-4">
                <img src="${posterUrl}"/>
                ${song.title}
            </div>`
        $('#movie-grid').append(newHTML)
    })
})


// document.querySelector('#movie-form').addEventListener('submit',(e)=>{

// })
$('#movie-form').submit((event)=>{
    // stop the browser from going forward!
    event.preventDefault();
    // get the value the user put in the search box
    const songSearch = $('#search-input').val();
    // store the movie for later
    localStorage.setItem('songList',songSearch);
    // console.log(movieSearch);
    const searchUrl = `${apiBaseUrl}/song/?api_key=${apiKey}&query=${songSearch}`
    console.log(searchUrl);
    let newHTML = '';
    $.getJSON(searchUrl,(songData)=>{
        // console.log(songData);
        songData.results.forEach((song)=>{
            const posterUrl = `${imageBaseUrl}w300${song.poster_path}`
            newHTML += `
            <div class="col-3">
                <img src="${posterUrl}" />
            </div>`
        })
        $('#movie-grid').html(newHTML)
    })
})
