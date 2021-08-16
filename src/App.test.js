import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('pair of random d6 numbers is obtained after click on btn', () => {
  render(<App />);

  const button = screen.getByText('roll');

  fireEvent.click(button);

  const dice1Num = Math.floor(screen.getByTestId('dice-1').textContent);

  expect(dice1Num).toBeGreaterThan(0);
  expect(dice1Num).toBeLessThan(7);

  // Testing dice 2 number

  const dice2Num = Math.floor(screen.getByTestId('dice-2').textContent);

  expect(dice2Num).toBeGreaterThan(0);
  expect(dice2Num).toBeLessThan(7);
});

test('rolled pair of d6/d6 numbers is printed in the history component', () => {
  render(<App />);

  const button = screen.getByText('roll');

  fireEvent.click(button);

  const dice1Num = Math.floor(screen.getByTestId('dice-1').textContent);
  const dice2Num = Math.floor(screen.getByTestId('dice-2').textContent);

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
