import runGame from '../index.js';

const gameDescription = '¿Cuál es el resultado de la expresión?';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const OPERATORS = ['+', '-', '*'];

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const getRandomOperator = () => (
  OPERATORS[Math.floor(Math.random() * OPERATORS.length)]
);

const calculateResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }
};

const getRoundData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculateResult(num1, num2, operator));

  return {
    question,
    correctAnswer,
  };
};

const runCalcGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runCalcGame;