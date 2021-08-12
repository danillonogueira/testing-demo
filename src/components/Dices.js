import styled from 'styled-components';

const StyledDices = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-gap: 20px;
  height: min-content;
  width: min-content;
  margin-bottom: 40px;
`;

const Dices = ({ children }) => <StyledDices>{children}</StyledDices>;

export default Dices;
