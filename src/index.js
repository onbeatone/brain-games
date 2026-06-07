import readlineSync from 'readline-sync';
import cli from './cli.js';

const roundsCount = 3;

const runGame = (gameDescription, getRoundData) => {
  const userName = cli();

  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );

      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;