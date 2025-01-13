import styled from "styled-components";
import Header from "../UI/Header";
import ButtonsGroup from "../UI/ButtonsGroup";
import Button from "../UI/Button";
import heroSectionBackyard from "../public/images/hero-section-backyard.jpg";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english } from "../Utils/constants";

const StyledHomePage = styled.section`
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6rem;
  padding: 8rem;
`;

const StyledHomePageLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
const StyledHomePageRightSide = styled.div`
  animation: RightToLeft 1.5s ease-in-out forwards;
`;

const StyledHeroI = styled.img`
  width: 65%;
  height: 60rem;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

function HomePage() {
  const { language } = useLanguageContext();
  return (
    <StyledHomePage>
      <StyledHomePageLeftSide>
        <Header animation="leftToRight" type="main">
          Green Company
        </Header>
        <Header animation="leftToRightSecondary" type="secondary" delay="1s">
          {language === "English"
            ? english.heroSectionSecondaryHeader
            : bg.heroSectionSecondaryHeader}
        </Header>
        <ButtonsGroup animation="bottomUpwards" delay="1.75s">
          <Button type="primary" animation="primary">
            {language === "English"
              ? english.heroSectionButtonMain
              : bg.heroSectionButtonMain}
          </Button>
          <Button type="secondary" animation="secondary">
            {language === "English"
              ? english.heroSectionButtonSecondary
              : bg.heroSectionButtonSecondary}
          </Button>
        </ButtonsGroup>
      </StyledHomePageLeftSide>
      <StyledHomePageRightSide>
        <StyledHeroI
          src={heroSectionBackyard}
          alt="Beautiful image of a backyard"
        ></StyledHeroI>
      </StyledHomePageRightSide>
    </StyledHomePage>
  );
}

export default HomePage;
