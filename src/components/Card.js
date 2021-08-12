import styled from "styled-components";

const StyledCard = styled.div`
  width: 400px;
  height: 350px;
  border-radius: 5px;
  z-index: 2;
  background: #FFF;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

export default Card;
