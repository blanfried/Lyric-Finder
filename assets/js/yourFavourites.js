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


const artist = localStorage.key('artist')

data.forEach(function(item) {
    const ul = document.getElementById("favouriteSongsList");
    ul.append('<li>'+ item.name + '</li>'); 
})