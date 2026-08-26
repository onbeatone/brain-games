import runGame from '../index.js';

const gameDescription = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};

const runPrimeGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runPrimeGame;