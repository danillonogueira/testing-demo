import Container from './components/Container';
import Dice from './components/Dice';
import GlobalStyles from './helpers/GlobalStyles';
import Button from './components/Button';
import React, { useState } from 'react';
// import History from './components/History';

function getRandomInt(min, max) {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);

  return Math.floor(Math.random() * (_max - _min)) + _min;
}

const App = () => {
  const [ dice1, setDice1 ] = useState(1);
  const [ dice2, setDice2 ] = useState(2);

  const roll = () => {
    setDice1(getRandomInt(1, 7));
    setDice2(getRandomInt(1, 7));
  };

  return (
    <Container>
      <GlobalStyles />
      <Dice>{dice1}</Dice>
      <Dice>{dice2}</Dice>
      <Button clickHandler={roll}>Roll</Button>
    </Container>
  );
};

export default App;
