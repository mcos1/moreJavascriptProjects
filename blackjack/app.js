let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: "Cos",
  chips: 145,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name} : $${player.chips}`;

function createRandomCard() {
  randomNumber = Math.ceil(Math.random() * 13);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = createRandomCard();
  let secondCard = createRandomCard();
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = `Sum : ${sum}`;
  cardsEl.textContent = `Cards : `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "Blackjack!";
  } else if (sum > 21) {
    isAlive = false;
    message = "You lost loser";
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let card = createRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
