// Sélection des éléments
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const getStartedBtn = document.getElementById('explorer-btn');

// Gestion du clic sur le bouton
getStartedBtn.addEventListener('click', () => {
  // Masquer l'écran d'accueil
  welcomeScreen.classList.add('hidden');

  // Afficher le contenu principal
  mainContent.classList.remove('hidden');
});





const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Affiche ou cache le menu
});


