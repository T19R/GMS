// Cards in ascending order of strength
const cards = [
    "Monkey", "Monkey", "Monkey", "Monkey", "Monkey", "Monkey", "Monkey", "Monkey",
    "Rhinoceros", "Rhinoceros", "Rhinoceros", "Rhinoceros", "Rhinoceros", "Rhinoceros", "Rhinoceros", "Rhinoceros",
    "Crocodile", "Crocodile", "Crocodile", "Crocodile", "Crocodile", "Crocodile", "Crocodile", "Crocodile",
    "Tiger", "Tiger", "Tiger", "Tiger", "Tiger", "Tiger", "Tiger", "Tiger",
    "Lion", "Lion", "Lion", "Lion", "Lion", "Lion", "Lion", "Lion",
    "Elephant", "Elephant", "Elephant", "Elephant", "Elephant", "Elephant", "Elephant", "Elephant"
  ];

  

// Get HTML elements
const playButton = document.getElementById("playButton");
const player1Deck = document.getElementById("player1Deck");
const player2Deck = document.getElementById("player2Deck");
const player1Card = document.getElementById("player1Card");
const player2Card = document.getElementById("player2Card");
const resultDiv = document.getElementById("result");
const player1CardCount = document.getElementById("player1CardCount");
// Initialize players and their decks
const player1 = {
  name: "Player 1",
  deck: [],
};

const player2 = {
  name: "Player 2",
  deck: [],
};

// Deal cards to players
function dealCards() {
    const shuffledCards = shuffle(cards.slice());
  
    for (let i = 0; i < shuffledCards.length; i++) {
      if (i % 2 === 0) {
        player1.deck.push(shuffledCards[i]);
      } else {
        player2.deck.push(shuffledCards[i]);
      }
    }
  }

  

// Compare cards and determine the winner
function compareCards() {
  const card1 = player1.deck.shift();
  const card2 = player2.deck.shift();

  player1Card.textContent = card1;
  player2Card.textContent = card2;

  const card1Index = cards.indexOf(card1);
  const card2Index = cards.indexOf(card2);

  if (card1Index > card2Index) {
    player1.deck.push(card1, card2);
    resultDiv.textContent = player1.name + " wins the round!";
  } else if (card1Index < card2Index) {
    player2.deck.push(card1, card2);
    resultDiv.textContent = player2.name + " wins the round!";
  } else {
    resultDiv.textContent = "It's a tie! Starting an argument...";
    startArgument(card1, card2);
  }
  player1CardCount.textContent = `Cards: ${player1.deck.length}`;
}

// Handle argument when cards have the same strength
function startArgument(card1, card2) {
  const argumentCards = [card1, card2];

  while (true) {
    const additionalCard1 = player1.deck.shift();
    const additionalCard2 = player2.deck.shift();

    argumentCards.push(additionalCard1, additionalCard2);

    player1Card.textContent += " + " + additionalCard1;
    player2Card.textContent += " + " + additionalCard2;

    const additionalCard1Index = cards.indexOf(additionalCard1);
    const additionalCard2Index = cards.indexOf(additionalCard2);

    if (additionalCard1Index > additionalCard2Index) {
      player1.deck.push(...argumentCards);
      resultDiv.textContent = player1.name + " wins the argument!";
      break;
    } else if (additionalCard1Index < additionalCard2Index) {
      player2.deck.push(...argumentCards);
      resultDiv.textContent = player2.name + " wins the argument!";
      break;
    }
  }
}

// Check if a player has won the game
function checkGameEnd() {
  if (player1.deck.length === cards.length) {
    resultDiv.textContent = player1.name + " has won the game!";
    playButton.disabled = true;
  } else if (player2.deck.length === cards.length) {
    resultDiv.textContent = player2.name + " has won the game!";
    playButton.disabled = true;
  } else {
    resultDiv.textContent = "Continuing the game...";
  }
}

// Shuffle function to randomize array elements
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Event listener for the play button
playButton.addEventListener("click", () => {
  compareCards();
  checkGameEnd();
});

// Start the game
dealCards();
