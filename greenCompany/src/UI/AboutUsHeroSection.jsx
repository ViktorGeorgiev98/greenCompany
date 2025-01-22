import styled from "styled-components";
import aboutUsImage from "../public/images/aboutUsHeroImage.jpg";
import Header from "./Header";

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
  return (
    <StyledAboutUsHeroSection>
      <Header animation="topToBottom" type="main">
        About the company
      </Header>
      <Header type="tertiary" animation="bottomUpwards" delay="1s">
        Discover the story behind our company's creation and the passion that
        drives everything we do.
      </Header>
    </StyledAboutUsHeroSection>
  );
}

export default AboutUsHeroSection;
