import styled from 'styled-components';
import dices from './../assets/dices.png';

const StyledHeadline = styled.div`
  display: flex;
  position: absolute;
  top: 8%;
  align-items: center;
`;

const StyledDices = styled.img`
  height: 150px;
  width: 200px;
`;

const StyledText = styled.div`
  margin: 0 50px;
  font-size: 4em;
  color: #ff4046;
  font-style: italic;
  font-weight: bold;
`;

const Headline = () => {
  return (
    <StyledHeadline>
      <StyledDices alt="two giant red dices" src={dices} />
      <StyledText>Dice Roller 2000</StyledText>
    </StyledHeadline>
  );
};

export default Headline;
