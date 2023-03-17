// Sélectionnez toutes les photos à partir de leur classe CSS
let photos = document.querySelectorAll(".galerie > div > img");

// Boucle à travers toutes les photos
for (let i = 0; i < photos.length; i++) {
  let photo = photos[i];

  // Sélectionnez le conteneur de la popup de chaque photo
  let container = photo.parentElement.nextElementSibling;

  // Ajouter l'événement "click" à la photo et au conteneur
  photo.addEventListener("click", function() {
    container.classList.toggle("active");
  });

  container.addEventListener("click", function(event) {
    event.stopPropagation();
    container.classList.toggle("active");
  });
}


let JF = document.querySelector(".JF");
let JF_container = document.querySelector(".JF_container");
JF.addEventListener("click", function(){
    JF_container.classList.toggle("active")
})
JF_container.addEventListener("click", function(){
    JF_container.classList.toggle("active");
})

