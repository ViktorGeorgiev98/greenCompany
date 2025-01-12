import styled from "styled-components";
import Header from "../UI/Header";

const StyledHomePage = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  padding: 8rem;
`;

const StyledHomePageLeftSide = styled.div``;
const StyledHomePageRightSide = styled.div``;

function HomePage() {
  return (
    <StyledHomePage>
      <StyledHomePageLeftSide>
        <Header type="main">Green Company</Header>
        <Header type="secondary">
          Your dream green space is only a phone call away
        </Header>
      </StyledHomePageLeftSide>
      <StyledHomePageRightSide>TEST</StyledHomePageRightSide>
    </StyledHomePage>
  );
}

export default HomePage;
