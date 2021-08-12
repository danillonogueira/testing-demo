import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEE;
  position: relative;
`;

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;