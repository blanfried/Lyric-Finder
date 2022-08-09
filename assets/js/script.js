const artistInput = document.querySelector('#artist-input');
const songInput = document.querySelector('#song-input');
const artist = artistInput.value;
const song = songInput.value;


function appendURL() {
      
}


var requestUrl = 'https://www.stands4.com/services/v2/lyrics.php';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })