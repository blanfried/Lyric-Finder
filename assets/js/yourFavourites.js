const recentSong = document.getElementById("recent-song");
const recentArtist = document.getElementById("recent-artist");
const artist = JSON.parse(localStorage.getItem('artist'));
const song = JSON.parse(localStorage.getItem('song'));

function display_stored_artist() {
    if (artist != null) {
        recentArtist.append(artist);
    }
}

function display_stored_song() {
    if (song != null) {
        recentSong.append(song);
    }
}

display_stored_artist()
display_stored_song()

console.log(artist);