import styled from 'styled-components';

const StyledDices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 40px;
`;

const Dices = ({ children }) => <StyledDices>{children}</StyledDices>;

export default Dices;
