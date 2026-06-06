import readlineSync from 'readline-sync';

const cli = () => {
  console.log('Bienvenido a Brain Games!');

  const userName = readlineSync.question('Cuál es tu nombre? ');

  console.log(`Hola, ${userName}!`);
};

export default cli;