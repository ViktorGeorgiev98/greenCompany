import styled from "styled-components";
import Header from "./Header";

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
  return (
    <StyledGallerySection>
      <Header type="secondary" textColor="#1CAC78">
        Our Projects
      </Header>
    </StyledGallerySection>
  );
}

export default Gallery;
