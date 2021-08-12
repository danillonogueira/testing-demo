import styled from 'styled-components';

const StyledHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #ff4046;
  grid-gap: 0 20px;
  font-size: 3em;
  height: 120px;
`;

const History = ({ rolls }) => {
  return (
    <StyledHistory>
      {rolls.map((roll, index) => <span key={index + 1}>{roll.firstRoll}/{roll.secondRoll}</span>)}
    </StyledHistory>
  );
};

export default History;
