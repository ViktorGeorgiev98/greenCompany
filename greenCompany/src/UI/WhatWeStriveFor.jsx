import styled from "styled-components";
import Header from "../UI/Header";
import Button from "../UI/Button";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english } from "../Utils/constants";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import { useModalContext } from "../Context/ModalContext";

const StyledWhatWeStriveFor = styled.div`
  padding: 6rem 20rem 12rem 20rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledWhatWeStriveForP = styled.p`
  font-size: 2rem;
  color: var(--color-grey);
  font-style: italic;
  font-weight: 400;
`;

const WhatWeStriveForCardContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  justify-items: center;
  align-items: center;
`;

const WhatWeStriveForCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 3rem;
`;

const WhatWeStriveForNumber = styled.div`
  font-weight: 600;
  font-size: 5rem;
  color: var(--color-main-dark);
  align-self: start;
`;

function WhatWeStriveFor() {
  const { language } = useLanguageContext();
  const { openModal, setOpenModal } = useModalContext();
  return (
    <StyledWhatWeStriveFor>
      <Header type="secondary" textColor="#1CAC78">
        What we strive for
      </Header>
      <WhatWeStriveForCardContainer>
        <WhatWeStriveForCard>
          <WhatWeStriveForNumber>01</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            Creative Innovation: Pushing the boundaries of design to craft
            unique and personalized landscapes.
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard>
          <WhatWeStriveForNumber>02</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            Sustainability: Prioritizing eco-friendly practices and materials to
            protect the environment.
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard>
          <WhatWeStriveForNumber>03</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            Quality Craftsmanship: Ensuring every detail is executed to
            perfection according to the design requested.
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard>
          <WhatWeStriveForNumber>04</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            Customer-Centric Approach: Listening to our clients and tailoring
            solutions to meet their needs.
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard>
          <WhatWeStriveForNumber>05</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            Community Impact: Creating spaces that bring people together and
            enhance their quality of life.
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard>
          <WhatWeStriveForNumber>06</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            At Green Company, we believe that every outdoor space has the
            potential to inspire and connect people.
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
      </WhatWeStriveForCardContainer>
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
    </StyledWhatWeStriveFor>
  );
}

export default WhatWeStriveFor;
