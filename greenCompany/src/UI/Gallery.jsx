import styled from "styled-components";
import Header from "./Header";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english, media } from "../Utils/constants";
import gallery1 from "../public/images/gallerySection/gallery1-min.jpg";
import gallery2 from "../public/images/gallerySection/gallery2-min.jpg";
import gallery3 from "../public/images/gallerySection/gallery3-min.jpg";
import gallery4 from "../public/images/gallerySection/gallery4-min.jpg";
import gallery5 from "../public/images/gallerySection/gallery5-min.jpg";
import gallery6 from "../public/images/gallerySection/gallery6-min.jpg";
import gallery7 from "../public/images/gallerySection/gallery7-min.jpg";
import gallery8 from "../public/images/gallerySection/gallery8-min.jpg";
import gallery9 from "../public/images/gallerySection/gallery9-min.jpg";
import gallery10 from "../public/images/gallerySection/gallery10-min.jpg";
import gallery11 from "../public/images/gallerySection/gallery11-min.jpg";
import gallery12 from "../public/images/gallerySection/gallery12-min.jpg";
import gallery13 from "../public/images/gallerySection/gallery13-min.jpg";
import gallery14 from "../public/images/gallerySection/gallery14-min.jpg";
import Button from "./Button";
import { useModalContext } from "../Context/ModalContext";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

const StyledGallerySection = styled.section`
  width: 100%;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-direction: column;
  @media ${media.tabletLandscape} {
    padding: 3rem;
  }
  @media ${media.tabletPortrait} {
    padding: 2rem;
  }

  @media ${media.mobile} {
    padding: 2rem 0.1rem;
  }
`;

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  gap: 1.5rem;
  padding: 1.5rem;
  grid-column: full-start / full-end;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.3s;
  /* &:hover {
    transform: scale(1.1);
  } */
`;

const GalleryItem = styled.div`
  overflow: hidden;
  grid-row: ${(props) => props.gridRow || ""};
  grid-column: ${(props) => props.gridColumn || ""};
`;

function Gallery() {
  const { language } = useLanguageContext();
  const { openModal, setOpenModal } = useModalContext();
  return (
    <StyledGallerySection>
      <Header type="secondary" textColor="#1CAC78">
        {language === "English" ? english.galleryHeader : bg.galleryHeader}
      </Header>
      <StyledGallery>
        <GalleryItem gridRow="1 / span 2" gridColumn="1 / span 2">
          <GalleryImg loading="lazy" src={gallery1} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="1 / span 3" gridColumn="3 / span 3">
          <GalleryImg loading="lazy" src={gallery2} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="1 / span 2" gridColumn="6 / 7">
          <GalleryImg loading="lazy" src={gallery3} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="1 / span 2" gridColumn="7 / -1">
          <GalleryImg loading="lazy" src={gallery4} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="3 / span 3" gridColumn="1 / span 2">
          <GalleryImg loading="lazy" src={gallery5} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="4 / span 2" gridColumn="3 / span 2">
          <GalleryImg loading="lazy" src={gallery6} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="4 / 5" gridColumn="5 / 6">
          <GalleryImg loading="lazy" src={gallery7} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="3 / span 2" gridColumn="6 / span 2">
          <GalleryImg loading="lazy" src={gallery8} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="3 / span 3" gridColumn="8 / -1">
          <GalleryImg loading="lazy" src={gallery9} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="6 / span 2" gridColumn="1 / 2">
          <GalleryImg loading="lazy" src={gallery10} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="6 / span 2" gridColumn="2 / span 2">
          <GalleryImg loading="lazy" src={gallery11} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow=" 6 / span 2" gridColumn="4 / 5">
          <GalleryImg loading="lazy" src={gallery12} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="5 / span 3" gridColumn="5 / span 3">
          <GalleryImg loading="lazy" src={gallery13} alt="Gallery image 1" />
        </GalleryItem>
        <GalleryItem gridRow="6 / span 2" gridColumn="8 / -1">
          <GalleryImg loading="lazy" src={gallery14} alt="Gallery image 1" />
        </GalleryItem>
      </StyledGallery>
      <Button
        onClick={() => setOpenModal(true)}
        type="primary"
        animation="primary"
      >
        {language === "English"
          ? english.heroSectionButtonMain
          : bg.heroSectionButtonMain}
      </Button>
      {openModal && <Modal>{<ContactForm />}</Modal>}
    </StyledGallerySection>
  );
}

export default Gallery;
