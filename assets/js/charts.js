var top10 = document.querySelector ('#top10');

const songInput = document.querySelector('#song-input');
var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1e24541a1d58fbe7992421c03d6c8516&format=json",
  true
);

request.onload = function () {};
request.send();
function getData() {
    const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1e24541a1d58fbe7992421c03d6c8516&format=json')
    const data = await response.json()
  }

  var data = JSON.parse(this.response)

data.forEach(song => {
 
  console.log(song.title)
})