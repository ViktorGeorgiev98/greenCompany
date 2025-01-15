import styled from "styled-components";
import { useLanguageContext } from "../Context/LanguageContext";
import Header from "./Header";
import ButtonsGroup from "./ButtonsGroup";
import Button from "./Button";
import heroSectionBackyard from "../public/images/hero-section-backyard.jpg";
import { bg, english } from "../Utils/constants";
import { useNavigate } from "react-router";

const StyledHeroSection = styled.section`
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

const StyledHeroSectionLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
const StyledHeroSectionRightSide = styled.div``;

const StyledHeroI = styled.img`
  width: 65%;
  height: 60rem;
  display: block;
  animation: RightToLeft 1.5s ease-out forwards;
  opacity: 0;
  transform: translateX(100%);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

function HeroSection() {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  return (
    <StyledHeroSection>
      <StyledHeroSectionLeftSide>
        <Header animation="leftToRight" type="main">
          Green Company
        </Header>
        <Header animation="leftToRightSecondary" type="tertiary" delay="1s">
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
          <Button
            type="secondary"
            animation="secondary"
            onClick={() => navigate("home")}
          >
            {language === "English"
              ? english.heroSectionButtonSecondary
              : bg.heroSectionButtonSecondary}
          </Button>
        </ButtonsGroup>
      </StyledHeroSectionLeftSide>
      <StyledHeroSectionRightSide>
        <StyledHeroI
          src={heroSectionBackyard}
          alt="Beautiful image of a backyard"
        ></StyledHeroI>
      </StyledHeroSectionRightSide>
    </StyledHeroSection>
  );
}

export default HeroSection;
