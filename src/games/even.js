import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * 100);

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