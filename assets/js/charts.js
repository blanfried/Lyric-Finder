fetch(
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1e24541a1d58fbe7992421c03d6c8516&format=json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const songsChart = document.querySelector("#songs-chart");

function displaySongsChart(data) {
  const displaySongsChart = data.tracks[0];
  const songsChart = document.getElementById("songs-chart");
}

const songsName = tracks.name;

const heading = document.createElement("h1");
heading.innerHTML = songsName;
songsChart.appendChild(heading);
