import styled from "styled-components";
import projectPaper from "../public/images/projectPaper.jpg";
import fullRealization from "../public/images/fullRealization.jpg";
import gardenMaintenance from "../public/images/gardenMaintenance.jpg";
import landscaping from "../public/images/landscaping.jpg";
import rooftopGarden from "../public/images/rooftopGarden.jpg";
import wateringSystem from "../public/images/wateringSystem.jpg";
import Header from "./Header";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english, media } from "../Utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StyledOurService = styled.section`
  padding: 10rem 15rem;
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${media.tabletLandscape} {
    padding: 7rem 10rem;
  }

  @media ${media.tabletPortrait} {
    padding: 4rem 6rem;
  }

  @media ${media.mobile} {
    padding: 2rem 3rem;
  }
`;

const StyledOutOfServiceGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5rem;
  grid-row-gap: 6rem;
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin-top: 6rem;

  @media ${media.tabletLandscape} {
    max-width: 100%;
  }

  @media ${media.mobile} {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OurServiceCardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  /* flex-wrap: wrap; */
  /* max-width: 50%; */
  max-height: 90%;
  background-color: var(--color-white);
  transition: all 0.4s ease-out;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 0.5rem;
  &:hover {
    transform: translateY(-2rem) scale(1.1);
  }
  overflow: hidden;

  @media ${media.laptop} {
    gap: 2rem;
  }

  @media ${media.tabletLandscape} {
    gap: 1.5rem;
    max-height: 90%;
  }

  @media ${media.mobile} {
    gap: 1.5rem;
  }
`;

const OurServiceCardImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;

  @media ${media.laptop} {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const OurServiceCardTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-font-hover);
  padding: 1.5rem;

  @media ${media.laptop} {
    padding: 1rem;
  }

  @media ${media.tabletLandscape} {
    font-size: 2rem;
    padding: 0.5rem;
  }

  @media ${media.mobile} {
    font-size: 1.6rem;
    padding: 0.5rem;
  }
`;

const OurServiceCardText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey);
  padding: 3.5rem;
  padding-top: 0;

  @media ${media.laptop} {
    padding: 3rem;
    padding-top: 0;
  }

  @media ${media.tabletLandscape} {
    font-size: 1.6rem;
    padding: 2rem;
    padding-top: 0;
  }

  @media ${media.mobile} {
    font-size: 1.2rem;
    padding: 1rem;
    padding-top: 0;
  }
`;

function OurService() {
  const { language } = useLanguageContext();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <StyledOurService>
      <Header type="secondary" textColor="#fff">
        {language === "English"
          ? english.ourServiceHeader
          : bg.ourServiceHeader}
      </Header>
      <StyledOutOfServiceGridRow>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={projectPaper}
            alt="Project"
            loading="lazy"
          ></OurServiceCardImg>
          <OurServiceCardTitle>
            {language === "English"
              ? english.ourServiceHeaderCard1Header
              : bg.ourServiceHeaderCard1Header}
          </OurServiceCardTitle>
          <OurServiceCardText>
            {language === "English"
              ? english.ourServiceHeaderCard1Text
              : bg.ourServiceHeaderCard1Text}
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={fullRealization}
            alt="Project"
            loading="lazy"
          ></OurServiceCardImg>
          <OurServiceCardTitle>
            {language === "English"
              ? english.ourServiceHeaderCard2Header
              : bg.ourServiceHeaderCard2Header}
          </OurServiceCardTitle>
          <OurServiceCardText>
            {language === "English"
              ? english.ourServiceHeaderCard2Text
              : bg.ourServiceHeaderCard2Text}
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={gardenMaintenance}
            alt="Project"
            loading="lazy"
          ></OurServiceCardImg>
          <OurServiceCardTitle>
            {language === "English"
              ? english.ourServiceHeaderCard3Header
              : bg.ourServiceHeaderCard3Header}
          </OurServiceCardTitle>
          <OurServiceCardText>
            {language === "English"
              ? english.ourServiceHeaderCard3Text
              : bg.ourServiceHeaderCard3Text}
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={landscaping}
            alt="Project"
            loading="lazy"
          ></OurServiceCardImg>
          <OurServiceCardTitle>
            {language === "English"
              ? english.ourServiceHeaderCard4Header
              : bg.ourServiceHeaderCard4Header}
          </OurServiceCardTitle>
          <OurServiceCardText>
            {language === "English"
              ? english.ourServiceHeaderCard4Text
              : bg.ourServiceHeaderCard4Text}
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={rooftopGarden}
            alt="Project"
            loading="lazy"
          ></OurServiceCardImg>
          <OurServiceCardTitle>
            {language === "English"
              ? english.ourServiceHeaderCard5Header
              : bg.ourServiceHeaderCard5Header}
          </OurServiceCardTitle>
          <OurServiceCardText>
            {language === "English"
              ? english.ourServiceHeaderCard5Text
              : bg.ourServiceHeaderCard5Text}
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={wateringSystem}
            alt="Project"
            loading="lazy"
          ></OurServiceCardImg>
          <OurServiceCardTitle>
            {language === "English"
              ? english.ourServiceHeaderCard6Header
              : bg.ourServiceHeaderCard6Header}
          </OurServiceCardTitle>
          <OurServiceCardText>
            {language === "English"
              ? english.ourServiceHeaderCard6Text
              : bg.ourServiceHeaderCard6Text}
          </OurServiceCardText>
        </OurServiceCardItem>
      </StyledOutOfServiceGridRow>
    </StyledOurService>
  );
}

export default OurService;
