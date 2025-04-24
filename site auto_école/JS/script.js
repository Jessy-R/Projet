// Fonction pour le toggle du menu
const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fonction pour afficher/masquer le sous-menu déroulant
const Deroulant = document.getElementById('deroulant');
const Sous = document.getElementById('sous');

Deroulant.addEventListener('click', () => {
    Sous.classList.toggle('active');
});
