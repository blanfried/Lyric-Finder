const songChart = document.querySelector("#songChart");
const artistChart = document.querySelector("#artistChart");

// fetch top ten songs and append to HTML
fetch(
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1e24541a1d58fbe7992421c03d6c8516&format=json&limit=10"
)
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
    appendSongs(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function appendSongs(data) {
  let trackAr = data.tracks.track;
  let trackList = [];
  trackAr.forEach((tracks, i) => {
    trackList.push(trackAr[i].name);
  });
  trackList.forEach((track, i) => {
    songChart.children[i].textContent = track;
  });
}

// fetch and append top ten artist to HTML
fetch(
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1e24541a1d58fbe7992421c03d6c8516&format=json&limit=10"
)
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
    appendArtist(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function appendArtist(data) {
  let artistAr = data.artists.artist;
  let artistList = [];
  artistAr.forEach((tracks, i) => {
    artistList.push(artistAr[i].name);
  });
  artistList.forEach((artist, i) => {
    artistChart.children[i].textContent = artist;
  });
}
