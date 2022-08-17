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
      .then(response => {
            if (!response.ok) {
                  throw new Error('Error fetching artist');
            } 
            return response.json()
      })
      .then(data => display_lyrics(data))
      .catch(error => {
            console.log(error)
            display_lyrics_not_found()
      });


})

function display_lyrics(data) {
      // const lyricsBox = document.querySelector("#lyrics-id");
      document.getElementById("lyrics-id").value =  data['lyrics'];
      localStorage.setItem((data['lyrics']), JSON.stringify(data['lyrics']));
      
}

function display_lyrics_not_found() {
      document.getElementById("lyrics-id").value = "Lyrics not found";
      
}
