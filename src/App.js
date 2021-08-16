import Container from './components/Container';
import Dice from './components/Dice';
import GlobalStyles from './helpers/GlobalStyles';
import Button from './components/Button';
import React, { useState } from 'react';
import History from './components/History';
import Dices from './components/Dices';
import Background from './components/Background';
import Card from './components/Card';
import Headline from './components/Headline';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
const getRandomInt = (min, max) => {
  const roundedMin = Math.ceil(min);

  return Math.floor(Math.random() * (Math.floor(max)- roundedMin)) + roundedMin;
};

const App = () => {
  const [ firstDice, setFirstDice ] = useState(getRandomInt(1, 7));
  const [ secondDice, setSecondDice ] = useState(getRandomInt(1, 7));
  const [ rolls, setRolls ] = useState([]);

  const getValues = () => {
    return {
      firstRoll: getRandomInt(1, 7),
      secondRoll: getRandomInt(1, 7)
    };
  };

  const setDices = ({ firstRoll, secondRoll }) => {
    setFirstDice(firstRoll);
    setSecondDice(secondRoll);
  };

  const isItFull = () => rolls.length === 6;

  const storeRolls = (currentRolls, { firstRoll, secondRoll }) => {
    setRolls([
      ...currentRolls,
      {
        firstRoll,
        secondRoll
      }
    ]);
  };

  const roll = () => {
    const values = getValues();

    setDices(values);

    if (isItFull()) {
      const modifiedRolls = [...rolls];

      modifiedRolls.shift();
      storeRolls(modifiedRolls, values);
    } else {
      storeRolls(rolls, values);
    }
  };

  const clear = () => {
    setRolls([]);
  };

  return (
    <Container>
      <GlobalStyles />
      <Headline />
      <Card>
        <Dices>
          <Dice testId={'dice-1'}>{firstDice}</Dice>
          <Dice testId={'dice-2'}>{secondDice}</Dice>
        </Dices>
        <Button clickHandler={roll}>roll</Button>
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
