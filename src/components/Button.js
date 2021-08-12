import styled from 'styled-components';

const StyledButton = styled.button`
  color: #FFF;
  width: 150px;
  height: 40px;
  background: #ff4046;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  z-index: 2;
  text-transform: uppercase;
  transition: opacity .2s;
  font-weight: bold;

  &:hover {
    opacity: .8;
  }
`;

const Button = ({ children, clickHandler }) => <StyledButton onClick={() => clickHandler()}>{children}</StyledButton>;

export default Button;