import runGame from '../index.js';

const gameDescription = 'Responde "yes" sí el número es par, de lo contrario responde "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

// Fisher-Yates Shuffle
const shuffleArray = (array) => {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

// Crear pool inicial
const createNumberPool = () => {
  const numbers = [];

  for (let i = MIN_NUMBER; i <= MAX_NUMBER; i += 1) {
    numbers.push(i);
  }

  return shuffleArray(numbers);
};

// Pool global de sesión
let numberPool = createNumberPool();

const getRandomNumber = () => {
  // Si se vacía, regenerar
  if (numberPool.length === 0) {
    numberPool = createNumberPool();
  }

  return numberPool.pop();
};

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const number = getRandomNumber();

  return {
    question: number,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
};

const runEvenGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runEvenGame;