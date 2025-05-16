const cards = document.querySelectorAll('.feature-pics-card');
const textCards = document.querySelectorAll('.feature-text-card');
let currentIndex = 0;

function showCard(index) {
    // Hide all right-column image cards
    cards.forEach((card) => {
        card.classList.remove('visible');
        card.style.zIndex = 0;
    });

    // Show the current image card
    cards[index].classList.add('visible');
    cards[index].style.zIndex = 1;

    // Hide all left-column text cards
    textCards.forEach((text) => {
        text.classList.remove('visible');
    });

    // Show the current text card
    textCards[index].classList.add('visible');
}

document.getElementById('forward-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

document.getElementById('back-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});
