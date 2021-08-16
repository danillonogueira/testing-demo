import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

const clickRollBtn = () => {
  const button = screen.getByText('roll');

  fireEvent.click(button);
};

const getDiceNum = (diceId) => {
  return Math.floor(screen.getByTestId(diceId).textContent);
};

const isInTheRange = (num) => {
  expect(num).toBeGreaterThan(0);
  expect(num).toBeLessThan(7);
};

const getDicesNums = () => {
  return {
    dice1Num: getDiceNum('dice-1'),
    dice2Num: getDiceNum('dice-2')
  };
};

test('pair of random d6 numbers is displayed after click on btn', () => {
  render(<App />);
  clickRollBtn();

  const { dice1Num, dice2Num } = getDicesNums();

  isInTheRange(dice1Num);
  isInTheRange(dice2Num);
});

test('rolled pair of d6/d6 numbers is displayed in the history component', () => {
  render(<App />);
  clickRollBtn();

  const { dice1Num, dice2Num } = getDicesNums();

  expect(screen.getByText(`${dice1Num}/${dice2Num}`)).toBeTruthy();
});

test('history has a max number of 6 rolls', () => {
  render(<App />);

  const button = screen.getByText('roll');

  for (let i = 0; i < 7; i += 1) {
    fireEvent.click(button);
  }

  expect(screen.getAllByTestId('roll').length).toBe(6);
});
