import runGame from '../index.js';

const gameDescription = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const runEvenGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runEvenGame;