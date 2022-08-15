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



// data.forEach(function(item) {
//     const ul = document.getElementById("favouriteSongsList");
//     ul.append('<li>'+ item.name + '</li>'); 
// })


const artist = localStorage.key('artist')
const song = localStorage.key('song')

JSON.parse(window.localStorage.getItem('artist'));
JSON.parse(window.localStorage.getItem('song'));




function retrieveKeys(){ //retrieves items in the localStorage
      // console.log("retrieve records");
      // const artist = localStorage.key('artist').value;
      // const song = localStorage.key('song').value;
      var artistKey = window.localStorage.getItem('artist').value;
      var songKey = window.localStorage.getItem('song').value;
      var list = document.createElement("<li></li>");
      var artistKeyInfo = document.createTextNode(artistKey);
      var songKeyInfo = document.createTextNode(songKey);
      list.appendChild(artistKeyInfo);
      list.appendChild(songKeyInfo);
      var ui = document.getElementById("favouriteSongsList");
      ui.appendChild(list);
  }
