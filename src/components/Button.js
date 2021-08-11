import styled from 'styled-components';

const StyledButton = styled.button`
  color: #FFF;
  width: 150px;
  height: 40px;
  background: red;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const Button = ({ children, clickHandler }) => <StyledButton onClick={() => clickHandler()}>{children}</StyledButton>;

export default Button;