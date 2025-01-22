import styled from "styled-components";
import Header from "./Header";
import phoneCallImage from "../public/images/phoneCall.jpg";
import personWorking from "../public/images/personWorking.jpg";
import projectDone from "../public/images/projectDone.jpg";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english } from "../Utils/constants";
import { AiFillPhone } from "react-icons/ai";

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
`;

const StyledHowItWorksImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
`;

const StyledHowItWorksTitle = styled.p`
  color: var(--color-main-dark);
  font-weight: 800;
  letter-spacing: 1rem;
  font-size: 9rem;
`;

const StyledHowItWorksHeader = styled.h3`
  color: var(--color-grey);
  font-size: 3.5rem;
  font-weight: 600;
`;

function HowItWorks() {
  const { language } = useLanguageContext();
  return (
    <StyledHowItWorks>
      <Header type="secondary">
        {language === "English"
          ? english.howItWorksHeader
          : bg.howItWorksHeader}
      </Header>
      <StyledHowItWorksContainer>
        <StyledHowItWorksTextContainer>
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
        <AiFillPhone fill="#1CAC78" size="35rem" />
        {/* <StyledHowItWorksImg
          src={phoneCallImage}
          alt="Phone call image"
        ></StyledHowItWorksImg> */}
        <StyledHowItWorksImg src={personWorking} alt="Person working" />
        <StyledHowItWorksTextContainer>
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
        <StyledHowItWorksTextContainer>
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
        <StyledHowItWorksImg src={projectDone} alt="Project done" />
      </StyledHowItWorksContainer>
    </StyledHowItWorks>
  );
}

export default HowItWorks;
