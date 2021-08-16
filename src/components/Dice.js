import styled from 'styled-components';

const StyledDice = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: solid 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  background: #FFF;
  color: #ff4046;
`;

const Dice = ({ children, testId }) => <StyledDice data-testid={testId}>{children}</StyledDice>;

export default Dice;