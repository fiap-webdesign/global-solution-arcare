const cards = document.querySelectorAll('.shelter-card');
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
    const counter = card.querySelector('#card-counter');
    if (counter) counter.textContent = `${index + 1} / ${cards.length}`;
  });
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

showCard(currentIndex);