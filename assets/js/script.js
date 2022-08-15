const artistInput = document.querySelector('#artist-input');
const songInput = document.querySelector('#song-input');
const searchBtn = document.querySelector('#search-btn');


searchBtn.addEventListener("click", () =>{
      const artist = artistInput.value;
      const song = songInput.value;
      const requestUrl = `https://api.lyrics.ovh/v1/${artist + "/" + song}`
      localStorage.setItem('artist', JSON.stringify(artist));
      localStorage.setItem('song', JSON.stringify(song));
      fetch(requestUrl)
      .then(response => response.json())
      .then(data => display_lyrics(data))
      .catch(error => console.log(error));


})

function display_lyrics(data) {
      // const lyricsBox = document.querySelector("#lyrics-id");
      document.getElementById("lyrics-id").value =  data['lyrics'];
      localStorage.setItem((data['lyrics']), JSON.stringify(data['lyrics']));
}

// const favouriteSongsList = document.querySelector('#favouriteSongsList')
// const pastSongs = JSON.parse(localStorage.getItem('songs')) || []
// const pastArtists = JSON.parse(localStorage.getItem('artists')) || []

// favouriteSongsList.innerHTML = 
// pastSongs || pastArtists.map(data => {
//       return `<li class="favourite-songs">${data.song} - ${data.artist}</li>`
// }).join('')


// document.getElementById("favouriteSongsList").html(JSON.parse(localStorage.getItem("artists")).map(function(data) {
//       var $list = $('<li>');
//       $list.append($('<h1>', { text: key.artist }));
//       $list.append($('<div>', { text: data.description }));
//       return $list;
//   }));


//   const data = JSON.parse(window.localStorage.getItem('artist'));

// data.forEach(function(item) {
//     const $ul = $("favouriteSongsList");        
//     $ul.append('<li>'+ item.name + '</li>');
// })