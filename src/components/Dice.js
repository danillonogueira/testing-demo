import styled from 'styled-components';

const StyledDice = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  color: red;
  border: solid 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const Dice = ({ children }) => <StyledDice>{children}</StyledDice>;

export default Dice;