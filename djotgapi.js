// console.log("sanity check")
const apiKey = '37d007a56d816107ce5b52c10342db37';
    // All api calls go to the this link
const apiBaseUrl = 'curl -X GET "https://api.getsongbpm.com/song/?api_key=37d007a56d816107ce5b52c10342db37&id=983pB"';
    // All images use this link
const imageBaseUrl = 'http://image.tmdb.org/t/p/';

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
$.getJSON(nowPlayingUrl, (movieData)=>{
    // console.log(movieData);
    movieData.results.forEach((movie)=>{
        const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`
        const newHTML = `
            <div class="col-4">
                <img src="${posterUrl}"/>
                ${movie.title}
            </div>`
        $('#movie-grid').append(newHTML)
    })
})


// document.querySelector('#movie-form').addEventListener('submit',(e)=>{

// })
$('#movie-form').submit((event)=>{
    // stop the browser form going forward!
    event.preventDefault();
    // get the value the user put in the search box
    const movieSearch = $('#search-input').val();
    // store the movie for later
    localStorage.setItem('movieList',movieSearch);
    // console.log(movieSearch);
    const searchUrl = `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${movieSearch}`
    console.log(searchUrl);
    let newHTML = '';
    $.getJSON(searchUrl,(movieData)=>{
        // console.log(movieData);
        movieData.results.forEach((movie)=>{
            const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`
            newHTML += `
            <div class="col-3">
                <img src="${posterUrl}" />
            </div>`
        })
        $('#movie-grid').html(newHTML)
    })
})
