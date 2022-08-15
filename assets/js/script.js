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




// Can also add artist and song values to local storage and then add another section to append them to right after the lyrics and then just remove the yourfavourites html