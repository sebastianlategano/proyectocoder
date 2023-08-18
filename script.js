const cards = document.querySelectorAll('.card');
const cardLinks = document.querySelectorAll('.card-link');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    cards.forEach((c) => c.classList.remove('center'));
    card.classList.add('center');
    
    cardLinks.forEach((link) => {
      if (card.classList.contains('center') && card.querySelector('input[type="radio"]').checked) {
        link.style.pointerEvents = 'auto';
        link.href = link.getAttribute('href'); // Restablecer el href
      } else {
        link.style.pointerEvents = 'none';
        link.removeAttribute('href'); // Eliminar el href
      }
    });
  });
});
