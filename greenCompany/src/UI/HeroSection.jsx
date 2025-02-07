import styled from "styled-components";
import { useLanguageContext } from "../Context/LanguageContext";
import Header from "./Header";
import ButtonsGroup from "./ButtonsGroup";
import Button from "./Button";
import heroSectionBackyard from "../public/images/hero-section-backyard.jpg";
import { bg, english, media } from "../Utils/constants";
import { useNavigate } from "react-router";
import { useModalContext } from "../Context/ModalContext";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

const StyledHeroSection = styled.section`
  width: 100%;
  /* height: 75vh; */
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10rem;
  padding: 2.5rem 12rem 7.5rem 12rem;

  @media ${media.laptop} {
    padding: 2.5rem 12rem 8rem 12rem;
  }

  @media ${media.tabletLandscape} {
    padding: 2.5rem 4rem 4rem 4rem;
  }

  @media ${media.tabletPortrait} {
    padding: 2rem 6rem 6rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media ${media.mobile} {
    padding: 2rem 0.5rem;
  }
`;

const StyledHeroSectionLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 4rem;
  /* width: 100%; */

  @media ${media.tabletPortrait} {
    align-items: center;
    justify-content: center;
    /* padding: 4rem; */
  }
  @media ${media.mobile} {
    gap: 3rem;
  }
`;
const StyledHeroSectionRightSide = styled.div`
  @media ${media.tabletPortrait} {
    width: 85%;
    height: auto;
  }

  @media ${media.mobile} {
    width: 95%;
    height: auto;
  }
  /* width: 100%; */
`;

const StyledHeroI = styled.img`
  width: 100%;
  height: auto;
  display: block;
  animation: RightToLeft 1.5s ease-out forwards;
  opacity: 0;
  transform: translateX(100%);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media ${media.tabletPortrait} {
    animation: bottomUpwards 2.5s ease-out forwards;
  }
`;

function HeroSection() {
  const { language } = useLanguageContext();
  const { openModal, setOpenModal } = useModalContext();
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
          <Button
            onClick={() => setOpenModal(true)}
            type="primary"
            animation="primary"
          >
            {language === "English"
              ? english.heroSectionButtonMain
              : bg.heroSectionButtonMain}
          </Button>
          <Button
            type="secondary"
            animation="secondary"
            onClick={() => navigate("/about")}
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
      {openModal && <Modal>{<ContactForm />}</Modal>}
    </StyledHeroSection>
  );
}

export default HeroSection;
