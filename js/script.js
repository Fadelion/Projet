// Définir le document HTML en mode strict
/*jslint browser:true */

document.addEventListener("DOMContentLoaded", () => {
    /* Gestion du Menu hamburger */
  // Sélectionner le bouton hamburger et les liens de navigation
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-liens");
  /* Ecouteur d'évènement pour savoir sur quelle bouton du menu a été cliqué */
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("actif");
  });

  
  /* Message lors de clique des boutons "Voir" dans la section "Mes Projets" */
  // Sélectionner tous les boutons "Voir" dans la section "Mes Projets"
  const voirButtons = document.querySelectorAll(".btn-projet");

  // Ajouter un événement de clic à chaque bouton
  voirButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Empêche le comportement par défaut du bouton
      alert("En cours de développement"); // Affiche une fenêtre contextuelle
    });
  });

  
  /* Couleur de section actuelle */
  // Mets une couleur pour préciser dans quelle section l'on se trouve
  const sections = document.querySelectorAll("section"); // récupère toutes les sections
  const navItems = document.querySelectorAll(".nav-liens li a"); // récupère tous les liens du menu

  window.addEventListener("scroll", () => { // écoute l'événement de défilement
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50; // récupère la position de la section
      if (pageYOffset >= sectionTop) { // vérifie si la position actuelle est supérieure à la position de la section
        current = section.getAttribute("id"); // récupère l'id de la section actuelle
      }
    });

    navItems.forEach((item) => { // parcours tous les liens du menu
      item.classList.remove("actif"); // retire l'ancienne couleur à la section précédente
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("actif"); // ajoute la couleur à la section actuelle
      }
    });
  });


  /* Mode Sombre */
  // Activer/Désactiver le mode sombre
  const darkModeToggle = document.getElementById("dark-mode-toggle"); // récupère le bouton
  const body = document.body; // récupère le body

  // Vérifier si le mode sombre est déjà activé (localStorage)
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode"); // active le mode sombre
  }

  // Activer/Désactiver le mode sombre
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Sauvegarder l'état dans localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled"); // active le mode sombre
    } else {
      localStorage.setItem("dark-mode", "disabled"); // désactive le mode sombre
    }
  });


  /* Animation défilement d'une section à une autre */
  // Défilement fluide pour les liens du menu
  navItems.forEach((link) => {
    link.addEventListener("click", (event) => { // écoute l'événement de clic
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // récupère l'id de la section
      const targetSection = document.getElementById(targetId); // récupère la section
      targetSection.scrollIntoView({ // défilement fluide
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Mettre à jour le lien actif dans le menu
  window.addEventListener("scroll", () => { // écoute l'événement de défilement
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("actif");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("actif");
      }
    });
  });
});