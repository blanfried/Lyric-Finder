const album = document.getElementById("#top-10");

fetch(
  "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=6c7aa94be66ddd84cad6986fca45fe45&format=json"
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    displayAlbum(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayAlbum(data) {
  const album = data.album[0];
  const albumDiv = document.getElementById("album");
}
