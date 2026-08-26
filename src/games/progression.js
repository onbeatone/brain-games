import runGame from '../index.js';

const gameDescription = '¿Qué número falta en la progresión?';

const PROGRESSION_LENGTH = 10;

const MIN_START = 1;
const MAX_START = 20;

const MIN_STEP = 1;
const MAX_STEP = 10;

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const generateProgression = (start, step, length) => (
  Array.from(
    { length },
    (_, index) => start + index * step,
  )
);

const getRoundData = () => {
  const start = getRandomNumber(MIN_START, MAX_START);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);

  const progression = generateProgression(
    start,
    step,
    PROGRESSION_LENGTH,
  );

  const hiddenIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer,
  };
};

const runProgressionGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runProgressionGame;