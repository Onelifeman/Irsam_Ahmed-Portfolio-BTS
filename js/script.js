// Sélection de l'icône de menu et de la barre de navigation
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Action lorsque l'icône de menu est cliquée
menuIcon.onclick = () => {
  // Ajoute ou supprime la classe "bx-x" pour afficher ou masquer l'icône de fermeture
  menuIcon.classList.toggle("bx-x");
  // Ajoute ou supprime la classe "active" pour afficher ou masquer la barre de navigation sur les petits écrans
  navbar.classList.toggle("active");
};

// Action de défilement des sections de la page
let sections = document.querySelectorAll("section"); // Sélection de toutes les sections de la page
let navLinks = document.querySelectorAll("header nav a"); // Sélection des liens de navigation dans l'en-tête

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // Vérification si la section est visible à l'écran
    if (top >= offset && top < offset + height) {
      // Ajoute la classe "active" au lien de navigation correspondant à la section visible
      navLinks.forEach((links) => {
        links.classList.remove("active"); // Supprime la classe "active" de tous les liens
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active"); // Ajoute la classe "active" au lien correspondant à la section visible
      });
    }
  });

  // En-tête collant lors du défilement
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Retire l'icône de menu et la barre de navigation lorsque les liens de navigation sont cliqués (défilement)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
