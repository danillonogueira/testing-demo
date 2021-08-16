import styled from 'styled-components';

const StyledHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #ff4046;
  grid-gap: 0 20px;
  font-size: 3em;
  height: 120px;
`;

const History = ({ rolls }) => (
  <StyledHistory>
    {
      rolls.map((roll, index) => {
        return (
          <span 
            key={index + 1} 
            data-testid={'roll'}>
              {roll.firstRoll}/{roll.secondRoll}
          </span>
        );
      })
    }
  </StyledHistory>
);

export default History;
