"use strict";

const albumsList = document.getElementById("albums");

albumsList.onclick = (event) => {
  const isRemoveButton = event.target.className === "remove_button";
  if (isRemoveButton) {
    event.target.closest(".album_title").remove();
  }
};

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    albums.forEach((album) => {
      const { title } = album;
      const albumsListItem = document.createElement("li");
      albumsListItem.classList.add("album_title");
      albumsListItem.innerHTML = title;
      albumsList.append(albumsListItem);

      const removeButton = document.createElement("button");
      removeButton.classList.add("remove_button");
      removeButton.setAttribute("type", "submit");
      removeButton.innerHTML = "Delete";
      albumsListItem.append(removeButton);
    });
  })
  .catch((error) => console.error(error));
