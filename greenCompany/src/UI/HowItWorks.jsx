import styled from "styled-components";
import Header from "./Header";
import phoneCallImage from "../public/images/phoneCall.jpg";
import personWorking from "../public/images/personWorking.jpg";
import projectDone from "../public/images/projectDone.jpg";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english, media } from "../Utils/constants";
import { AiFillPhone } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StyledHowItWorks = styled.section`
  /* height: 100vh; */
  width: 100%;
  height: auto;
  background: var(--color-white);
  padding: 10rem 20rem 10rem 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* @media ${media.tabletLandscape} {
    padding: 7rem 10rem 7rem 10rem;
  } */

  @media ${media.tabletLandscape} {
    padding: 2.5rem 6rem 6rem 6rem;
  }

  @media ${media.tabletPortrait} {
    padding: 2.5rem 5rem 5rem 5rem;
  }
`;

const StyledHowItWorksContainer = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12rem;
  justify-items: center;
  align-items: center;
  /* width: 100%;
  height: auto; */
  @media ${media.tabletLandscape} {
    margin-top: 5rem;
    grid-gap: 8rem;
  }

  @media ${media.tabletPortrait} {
    margin-top: 4rem;
    grid-gap: 6rem;
  }

  @media ${media.mobile} {
    margin-top: 3rem;
    grid-gap: 4rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledHowItWorksImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  @media ${media.mobile} {
    width: 100%;
    height: auto;
  }
`;

const StyledHowItWorksTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const StyledHowItWorksText = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-grey);
  margin-top: 3rem;

  @media ${media.laptop} {
    font-size: 1.6rem;
  }

  @media ${media.tabletLandscape} {
    font-size: 1.6rem;
  }
  @media ${media.tabletPortrait} {
    font-size: 1.4rem;
  }
`;

const StyledHowItWorksTitle = styled.p`
  color: var(--color-main-dark);
  font-weight: 800;
  letter-spacing: 1rem;
  font-size: 9rem;

  @media ${media.tabletLandscape} {
    font-size: 6rem;
  }

  @media ${media.tabletPortrait} {
    font-size: 5rem;
  }
`;

const StyledHowItWorksHeader = styled.h3`
  color: var(--color-grey);
  font-size: 3.5rem;
  font-weight: 600;

  @media ${media.tabletLandscape} {
    font-size: 2.5rem;
  }

  @media ${media.tabletPortrait} {
    font-size: 2rem;
  }
`;

function HowItWorks() {
  const { language } = useLanguageContext();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <StyledHowItWorks>
      <Header type="secondary">
        {language === "English"
          ? english.howItWorksHeader
          : bg.howItWorksHeader}
      </Header>
      <StyledHowItWorksContainer>
        <StyledHowItWorksTextContainer data-aos="fade-right">
          <StyledHowItWorksTitle>01</StyledHowItWorksTitle>
          <StyledHowItWorksHeader>
            {language === "English"
              ? english.howItWorksContainerHeader
              : bg.howItWorksContainerHeader}
          </StyledHowItWorksHeader>
          <StyledHowItWorksText>
            {language === "English"
              ? english.howItWorksContainerText
              : bg.howItWorksContainerText}
          </StyledHowItWorksText>
        </StyledHowItWorksTextContainer>
        <StyledHowItWorksTextContainer data-aos="fade-left">
          <AiFillPhone fill="#1CAC78" size="35rem" />
        </StyledHowItWorksTextContainer>
        {/* <StyledHowItWorksImg
          src={phoneCallImage}
          alt="Phone call image"
        ></StyledHowItWorksImg> */}
        <StyledHowItWorksImg
          src={personWorking}
          alt="Person working"
          data-aos="fade-right"
        />
        <StyledHowItWorksTextContainer data-aos="fade-left">
          <StyledHowItWorksTitle>02</StyledHowItWorksTitle>
          <StyledHowItWorksHeader>
            {language === "English"
              ? english.howItWorksContainerHeader2
              : bg.howItWorksContainerHeader2}
          </StyledHowItWorksHeader>
          <StyledHowItWorksText>
            {language === "English"
              ? english.howItWorksContainerText2
              : bg.howItWorksContainerText2}
          </StyledHowItWorksText>
        </StyledHowItWorksTextContainer>
        <StyledHowItWorksTextContainer data-aos="fade-right">
          <StyledHowItWorksTitle>03</StyledHowItWorksTitle>
          <StyledHowItWorksHeader>
            {language === "English"
              ? english.howItWorksContainerHeader3
              : bg.howItWorksContainerHeader3}
          </StyledHowItWorksHeader>
          <StyledHowItWorksText>
            {language === "English"
              ? english.howItWorksContainerText3
              : bg.howItWorksContainerText3}
          </StyledHowItWorksText>
        </StyledHowItWorksTextContainer>
        <StyledHowItWorksImg
          src={projectDone}
          alt="Project done"
          data-aos="fade-left"
        />
      </StyledHowItWorksContainer>
    </StyledHowItWorks>
  );
}

export default HowItWorks;
