// Cards in ascending order of strength Карты в порядке возрастания силы
const cards = [
    "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1",  
    "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2",
    "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3",
    "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4",
    "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5",
    "Слон 6", "Слон 6", "Слон 6", "Слон 6", "Слон 6", "Слон 6",  "Слон 6", "Слон 6"
  ];

console.log(cards.length); //Console output of array length Вывод консоль длины массива

// Get HTML elements Получить HTML-элементы
const playButton = document.getElementById("playButton");
const player1Deck = document.getElementById("player1Deck");
const player2Deck = document.getElementById("player2Deck");
const player1Card = document.getElementById("player1Card");
const player2Card = document.getElementById("player2Card");
const resultDiv = document.getElementById("result");
const player1CardCount = document.getElementById("player1CardCount");
const player2CardCount = document.getElementById("player2CardCount");


// Initialize players and their decks  Инициализировать игроков и их колоды
const player1 = {
  name: "Player 1 Игрок 1",
  deck: [],
};

const player2 = {
  name: "Player 2 Игрок 2",
  deck: [],
};

// Deal cards to players Раздайте карты игрокам
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

  

// Compare cards and determine the winner Сравните карты и определите победителя
function compareCards() {
  const card1 = player1.deck.shift();
  const card2 = player2.deck.shift();

  player1Card.textContent = card1;
  player2Card.textContent = card2;

  const card1Index = cards.indexOf(card1);
  const card2Index = cards.indexOf(card2);

  if (card1Index > card2Index) {
    player1.deck.push(card1, card2);
    resultDiv.textContent = player1.name + " wins the round! выигрывает раунд!";
  } else if (card1Index < card2Index) {
    player2.deck.push(card1, card2);
    resultDiv.textContent = player2.name + " wins the round! выигрывает раунд!";
  } else {
    resultDiv.textContent = "It's a tie! Starting an argument... Начало спора...";
    startArgument(card1, card2);
  }
  //отоброжает массив 
  player1CardCount.textContent = `Cards: ${player1.deck.length}`;
  player2CardCount.textContent = `Карты: ${player2.deck.length}`;
}

// Handle argument when cards have the same strength Обрабатывать спор, когда карты имеют одинаковую силу
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

// Check if a player has won the game Проверяем, выиграл ли игрок игру
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

// Shuffle function to randomize array elements Функция Shuffle для рандомизации элементов массива
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Event listener for the play button Слушатель событий для кнопки воспроизведения
playButton.addEventListener("click", () => {
  compareCards();
  checkGameEnd();
});

// Start the game Начало игры
dealCards();
