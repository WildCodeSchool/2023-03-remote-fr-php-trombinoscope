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



/*let Alexandre = document.querySelector(".Alexandre");
let Alexandre_container = document.querySelector(".Alexandre_container");
Alexandre.addEventListener("click", function(){
    Alexandre_container.classList.toggle("active")
})
Alexandre_container.addEventListener("click", function(){
    Alexandre_container.classList.toggle("active");
})




let Alexis = document.querySelector(".Alexis");
let Alexis_container = document.querySelector(".Alexis_container");
Alexis.addEventListener("click", function(){
    Alexis_container.classList.toggle("active")
})
Alexis_container.addEventListener("click", function(){
    Alexis_container.classList.toggle("active");
})




let Arthur = document.querySelector(".Arthur");
let Arthur_container = document.querySelector(".Arthur_container");
Arthur.addEventListener("click", function(){
    Arthur_container.classList.toggle("active")
})
Arthur_container.addEventListener("click", function(){
    Arthur_container.classList.toggle("active");
})




let Baptiste = document.querySelector(".Baptiste");
let Baptiste_container = document.querySelector(".Baptiste_container");
Baptiste.addEventListener("click", function(){
    Baptiste_container.classList.toggle("active")
})
Baptiste_container.addEventListener("click", function(){
    Baptiste_container.classList.toggle("active");
})




let Brian = document.querySelector(".Brian");
let Brian_container = document.querySelector(".Brian_container");
Brian.addEventListener("click", function(){
    Brian_container.classList.toggle("active")
})
Brian_container.addEventListener("click", function(){
    Brian_container.classList.toggle("active");
})




let Johann = document.querySelector(".Johann");
let Johann_container = document.querySelector(".Johann_container");
Johann.addEventListener("click", function(){
    Johann_container.classList.toggle("active")
})
Johann_container.addEventListener("click", function(){
    Johann_container.classList.toggle("active");
})




let Joss = document.querySelector(".Joss");
let Joss_container = document.querySelector(".Joss_container");
Joss.addEventListener("click", function(){
    Joss_container.classList.toggle("active")
})
Joss_container.addEventListener("click", function(){
    Joss_container.classList.toggle("active");
})




let Julien = document.querySelector(".Julien");
let Julien_container = document.querySelector(".Julien_container");
Julien.addEventListener("click", function(){
    Julien_container.classList.toggle("active")
})
Julien_container.addEventListener("click", function(){
    Julien_container.classList.toggle("active");
})




let Virginie = document.querySelector(".Virginie");
let Virgnie_container = document.querySelector(".Virginie_container");
Virginie.addEventListener("click", function(){
    Virginie_container.classList.toggle("active")
})
Virginie_container.addEventListener("click", function(){
    Virginie_container.classList.toggle("active");
})



let Laurent = document.querySelector(".Laurent");
let Laurent_container = document.querySelector(".Laurent_container");
Laurent.addEventListener("click", function(){
    Laurent_container.classList.toggle("active")
})
Laurent_container.addEventListener("click", function(){
    Laurent_container.classList.toggle("active");
})




let NinaS = document.querySelector(".NinaS");
let NinaS_container = document.querySelector(".NinaS_container");
NinaS.addEventListener("click", function(){
    NinaS_container.classList.toggle("active")
})
NinaS_container.addEventListener("click", function(){
    NinaS_container.classList.toggle("active");
})




let Titouan = document.querySelector(".Titouan");
let Titouan_container = document.querySelector(".Titouan_container");
Titouan.addEventListener("click", function(){
    Titouan_container.classList.toggle("active")
})
Titouan_container.addEventListener("click", function(){
    Titouan_container.classList.toggle("active");
})




let Valentin = document.querySelector(".Valentin");
let Valentin_container = document.querySelector(".Valentin_container");
Valentin.addEventListener("click", function(){
    Valentin_container.classList.toggle("active")
}) 
Valentin_container.addEventListener("click", function(){
    Valentin_container.classList.toggle("active");
})




let VictoriaG = document.querySelector(".VictoriaG");
let VictoriaG_container = document.querySelector(".VictoriaG_container");
VictoriaG.addEventListener("click", function(){
    VictoriaG_container.classList.toggle("active")
})
VictoriaG_container.addEventListener("click", function(){
    VictoriaG_container.classList.toggle("active");
})




let VincentR = document.querySelector(".VincentR");
let VincentR_container = document.querySelector(".VincentR_container");
VincentR.addEventListener("click", function(){
    VincentR_container.classList.toggle("active")
})
VincentR_container.addEventListener("click", function(){
    VincentR_container.classList.toggle("active");
})*/