import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = (props) => <StyledContainer>{props.children}</StyledContainer>;

export default Container;