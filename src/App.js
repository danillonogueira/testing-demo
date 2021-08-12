import Container from './components/Container';
import Dice from './components/Dice';
import GlobalStyles from './helpers/GlobalStyles';
import Button from './components/Button';
import React, { useState } from 'react';
import History from './components/History';
import Dices from './components/Dices';
import Background from './components/Background';
import Card from './components/Card';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
const getRandomInt = (min, max) => {
  const _min = Math.ceil(min);

  return Math.floor(Math.random() * (Math.floor(max)- _min)) + _min;
};

const App = () => {
  const [ firstDice, setFirstDice ] = useState(getRandomInt(1, 7));
  const [ secondDice, setSecondDice ] = useState(getRandomInt(1, 7));
  const [ rolls, setRolls ] = useState([]);

  const roll = () => {
    const firstRoll = getRandomInt(1, 7);
    const secondRoll =  getRandomInt(1, 7);

    setFirstDice(firstRoll);
    setSecondDice(secondRoll);
    setRolls([
      ...rolls, 
      { 
        firstRoll, 
        secondRoll 
      }
    ]);
  };

  const clear = () => {
    setRolls([]);
  };

  return (
    <Container>
      <GlobalStyles />
      <Card>
        <Dices>
          <Dice>{firstDice}</Dice>
          <Dice>{secondDice}</Dice>
        </Dices>
        <Button clickHandler={roll}>Roll</Button>
      </Card>
      <Card>
        <History rolls={rolls} />
        <Button clickHandler={clear}>Clear</Button>
      </Card>
      <Background />
    </Container>
  );
};

export default App;
