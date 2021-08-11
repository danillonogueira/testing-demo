import Container from './components/Container';
import Dice from './components/Dice';
import GlobalStyles from './helpers/GlobalStyles';
import Button from './components/Button';
import React, { useState } from 'react';
// import History from './components/History';

const App = () => {
  const [ firstDice, setFirstDice ] = useState(6);
  const [ secondDice, setSecondDice ] = useState(3);

  const getRandomInt = (min, max) => {
    const _min = Math.ceil(min);

    return Math.floor(Math.random() * (Math.floor(max)- _min)) + _min;
  };

  const roll = () => {
    setFirstDice(getRandomInt(1, 7));
    setSecondDice(getRandomInt(1, 7));
  };

  return (
    <Container>
      <GlobalStyles />
      <Dice>{firstDice}</Dice>
      <Dice>{secondDice}</Dice>
      <Button clickHandler={roll}>Roll</Button>
    </Container>
  );
};

export default App;
