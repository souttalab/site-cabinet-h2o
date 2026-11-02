// Menu burger (téléphone) : ouvre / ferme la liste des liens du header
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('menu-principal');

function fermerMenu() {
  navMenu.classList.remove('ouvert');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Ouvrir le menu');
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const ouvert = navMenu.classList.toggle('ouvert');
    navToggle.setAttribute('aria-expanded', ouvert);
    navToggle.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Ferme le menu quand on choisit un lien (utile pour les ancres de la même page)
  navMenu.querySelectorAll('a').forEach(lien => lien.addEventListener('click', fermerMenu));

  // Ferme le menu avec la touche Échap
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fermerMenu(); });
}