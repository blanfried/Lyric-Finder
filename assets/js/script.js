const artistInput = document.querySelector('#artist-input');
const songInput = document.querySelector('#song-input');
const artist = artistInput.value;
const song = songInput.value;
const searchBtn = document.querySelector('#search-btn');

function createUrl() {
      let baseUrl = 'https://api.lyrics.ovh/v1/'
      function appendArtist() {
            if (onclick.searchBtn) {
                  baseUrl.append(artist + "/")
            }
      }
      function appendSong() {
            if (onclick.searchBtn) {
                  baseUrl.append(song)
            }
      }
      appendArtist();
      appendSong();
}

console.log(createUrl());



var requestUrl = 'https://api.lyrics.ovh/v1/{artist}/{song}';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })