"use strict";

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    albums.forEach((album) => {
      const { title } = album;
      const albumsList = document.getElementById("albums");
      let albumsListItem = document.createElement("li");
      albumsListItem.classList.add("album_title");
      albumsListItem.innerHTML = title;
      albumsList.append(albumsListItem);
    });
  })
  .catch((error) => console.error(error));
