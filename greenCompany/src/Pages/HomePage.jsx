import styled from "styled-components";
import Header from "../UI/Header";
import ButtonsGroup from "../UI/ButtonsGroup";
import Button from "../UI/Button";

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

const StyledHomePageLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
const StyledHomePageRightSide = styled.div``;

function HomePage() {
  return (
    <StyledHomePage>
      <StyledHomePageLeftSide>
        <Header animation="leftToRight" type="main">
          Green Company
        </Header>
        <Header animation="leftToRightSecondary" type="secondary">
          Your dream green space is only a phone call away
        </Header>
        <ButtonsGroup>
          <Button type="primary" animation="primary">
            Contact us
          </Button>
          <Button type="secondary" animation="secondary">
            Learn more
          </Button>
        </ButtonsGroup>
      </StyledHomePageLeftSide>
      <StyledHomePageRightSide>TEST</StyledHomePageRightSide>
    </StyledHomePage>
  );
}

export default HomePage;
