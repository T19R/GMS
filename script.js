
// Cards in ascending order of strength Карты в порядке возрастания силы
const cards = [
  "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1", "Мартышка 1",  
  "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2", "Носорог 2",
  "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3", "Крокодил 3",
  "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4", "Тигр 4",
  "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5", "Лев 5",
  "Слон 6", "Слон 6", "Слон 6", "Слон 6", "Слон 6", "Слон 6",  "Слон 6", "Слон 6"
];

// ...

// Compare cards and determine the winner
function compareCards() {
  const card1 = player1.deck.shift();
  const card2 = player2.deck.shift();

  player1Card.textContent = card1;
  player2Card.textContent = card2;

  const card1Index = cards.indexOf(card1);
  const card2Index = cards.indexOf(card2);

  player1Card.className = "card " + getCardClass(card1);
  player2Card.className = "card " + getCardClass(card2);

  // ...
}

// Get CSS class based on card type
function getCardClass(card) {
  switch (card) {
    case "Мартышка 1":
      return "monkey";
    case "Носорог 2":
      return "rhino";
    case "Крокодил 3":
      return "crocodile";
    case "Тигр 4":
      return "tiger";
    case "Лев 5":
      return "lion";
    case "Слон 6":
      return "elephant";
    default:
      return "";
  }
}


console.log(cards.length); //Console output of array length Вывод консоль длины массива
 //disabled reloadButton

// Get HTML elements Получить HTML-элементы
const playButton = document.getElementById("playButton");
const reloadButton = document.getElementById("reloadButton");
const player1Deck = document.getElementById("player1Deck");
const player2Deck = document.getElementById("player2Deck");
const player1Card = document.getElementById("player1Card");
const player2Card = document.getElementById("player2Card");
const resultDiv = document.getElementById("result");
const player1CardCount = document.getElementById("player1CardCount");
const player2CardCount = document.getElementById("player2CardCount");




// Initialize players and their decks  Инициализировать игроков и их колоды
const player1 = {
  name: "Игрок 1",
  deck: [],
};

const player2 = {
  name: "Игрок 2",
  deck: [],
};

// Deal cards to players Раздайте карты игрокам
// Deal cards to players
function dealCards() {
  const shuffledCards = shuffle(cards.slice());

  for (let i = 0; i < shuffledCards.length; i++) {
    if (i % 2 === 0) {
      if (player1.deck.length < cards.length / 2) {
        player1.deck.push(shuffledCards[i]);
      }
    } else {
      if (player2.deck.length < cards.length / 2) {
        player2.deck.push(shuffledCards[i]);
      }
    }
  }
}

// ...

// Compare cards and determine the winner
function compareCards() {
  if (player1.deck.length === 0 || player2.deck.length === 0) {
    return;
  }

  const card1 = player1.deck.shift();
  const card2 = player2.deck.shift();

  // Remaining code...
}

  

// Compare cards and determine the winner Сравните карты и определите победителя

function compareCards() {
  const card1 = player1.deck.shift();
  const card2 = player2.deck.shift();

  player1Card.textContent = card1;
  player2Card.textContent = card2;

  const card1Index = cards.indexOf(card1);
  const card2Index = cards.indexOf(card2);

  player1Card.className = "card " + getCardClass(card1);
  player2Card.className = "card " + getCardClass(card2);

  if (card1Index > card2Index) {
    player1.deck.push(card1, card2);
    resultDiv.textContent = player1.name + " выигрывает раунд!";
  } else if (card1Index < card2Index) {
    player2.deck.push(card1, card2);
    resultDiv.textContent = player2.name + " выигрывает раунд!";
  } else {
    player1Card.className += " disputed";
    player2Card.className += " disputed";
    resultDiv.textContent = "Одинаковые карты! Начало спора...";
    startArgument(card1, card2);
  }

  player1CardCount.textContent = "Карты: " + player1.deck.length;
  player2CardCount.textContent = "Карты: " + player2.deck.length;
}


// Get CSS class based on card type
function getCardClass(card) {
  switch (card) {
    case "Мартышка 1":
      return "monkey";
    case "Носорог 2":
      return "rhino";
    case "Крокодил 3":
      return "crocodile";
    case "Тигр 4":
      return "tiger";
    case "Лев 5":
      return "lion";
    case "Слон 6":
      return "elephant";
    default:
      return "";
  }

  if (card1Index > card2Index) {
    player1.deck.push(card1, card2);
    resultDiv.textContent = player1.name + "  выигрывает раунд!";
  } else if (card1Index < card2Index) {
    player2.deck.push(card1, card2);
    resultDiv.textContent = player2.name + " выигрывает раунд!";
  } else {
    resultDiv.textContent = "Одинаковые карты! Начало спора...";
    startArgument(card1, card2);
  }
  //отоброжает массив 
  player1CardCount.textContent = `Карты: ${player1.deck.length}`;
  player2CardCount.textContent = `Карты: ${player2.deck.length}`;
}

// Handle argument when cards have the same strength Обрабатывать спор, когда карты имеют одинаковую силу
// Handle argument when cards have the same strength
function startArgument(card1, card2) {
  const argumentCards = [card1, card2];

  while (true) {
    const additionalCard1 = player1.deck.shift();
    const additionalCard2 = player2.deck.shift();

    if (!additionalCard1 || !additionalCard2) {
      break;
    }

    argumentCards.push(additionalCard1, additionalCard2);

    player1Card.textContent += " + " + additionalCard1;
    player2Card.textContent += " + " + additionalCard2;

    const additionalCard1Index = cards.indexOf(additionalCard1);
    const additionalCard2Index = cards.indexOf(additionalCard2);

    if (additionalCard1Index > additionalCard2Index) {
      player1.deck.push(...argumentCards);
      resultDiv.textContent = player1.name + " выигрывает спор!";
      break;
    } else if (additionalCard1Index < additionalCard2Index) {
      player2.deck.push(...argumentCards);
      resultDiv.textContent = player2.name + " выигрывает спор!";
      break;
    }
  }
}




// Check if a player has won the game Проверяем, выиграл ли игрок игру
function checkGameEnd() {
  if (player1.deck.length === cards.length) {
    resultDiv.textContent = player1.name + " выиграл игру!";
    playButton.disabled = true;
  } else if (player2.deck.length === cards.length) {
    resultDiv.textContent = player2.name + " выиграл игру!";
    playButton.disabled = true;
  } else {
    resultDiv.textContent = "Продолжаем игру...";
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
function restart(){
  if (player1.deck.length === cards.length){}
  else if(player2.deck.length === cards.length){}
}





// Start the game Начало игры
dealCards();

// Add event listener for reload button Слушатель событий для кнопки перезагрузки
reloadButton.addEventListener("click", () => {
location.reload();
});
