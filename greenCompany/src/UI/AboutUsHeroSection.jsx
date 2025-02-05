import styled from "styled-components";
import aboutUsImage from "../public/images/aboutUsHeroImage.jpg";
import Header from "./Header";
import { useLanguageContext } from "../Context/LanguageContext";

const StyledAboutUsHeroSection = styled.section`
  width: 100%;
  height: 75vh;
  background-image: linear-gradient(
      to right,
      rgba(208, 240, 192, 0.51),
      rgba(28, 172, 120, 0.51)
    ),
    url(${aboutUsImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7.5rem;
`;

function AboutUsHeroSection() {
  const { language } = useLanguageContext();
  return (
    <StyledAboutUsHeroSection>
      <Header animation="topToBottom" type="main">
        {language === "English" ? "About the company" : "За компанията"}
      </Header>
      <Header type="tertiary" animation="bottomUpwards" delay="1s">
        {language === "English"
          ? "Discover the story behind our company's creation and the passion that drives everything we do."
          : "Открийте историята зад създаването на  компанията и страстта движейки всичко, което правим."}
      </Header>
    </StyledAboutUsHeroSection>
  );
}

export default AboutUsHeroSection;
