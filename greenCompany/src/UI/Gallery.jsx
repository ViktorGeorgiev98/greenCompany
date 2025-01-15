import styled from "styled-components";
import Header from "./Header";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english } from "../Utils/constants";

const StyledGallerySection = styled.section`
  width: 100%;
  padding: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-direction: column;
`;

function Gallery() {
  const { language } = useLanguageContext();
  return (
    <StyledGallerySection>
      <Header type="secondary" textColor="#1CAC78">
        {language === "English" ? english.galleryHeader : bg.galleryHeader}
      </Header>
    </StyledGallerySection>
  );
}

export default Gallery;
