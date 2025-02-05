import styled from "styled-components";
import Header from "../UI/Header";
import Button from "../UI/Button";
import { useLanguageContext } from "../Context/LanguageContext";
import { bg, english, media } from "../Utils/constants";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import { useModalContext } from "../Context/ModalContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StyledWhatWeStriveFor = styled.div`
  padding: 6rem 20rem 12rem 20rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 160em) {
    padding: 4rem 12rem 5rem 12rem;
  }
`;

const StyledWhatWeStriveForP = styled.p`
  font-size: 2rem;
  color: var(--color-grey);
  font-style: italic;
  font-weight: 400;

  @media (max-width: 160em) {
    font-size: 1.6rem;
  }

  @media ${media.laptop} {
    font-size: 1.5rem;
  }
`;

const WhatWeStriveForCardContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  justify-items: center;
  align-items: center;

  @media ${media.tabletLandscape} {
    width: 100%;
  }
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

  @media (max-width: 160em) {
    padding: 2.8rem;
  }

  @media ${media.laptop} {
    padding: 3rem 0.8rem;
    /* padding: 3rem 2rem;
    flex-direction: column; */
  }

  @media (max-width: 120em) {
    padding: 3rem 2rem;
    flex-direction: column;
  }

  @media ${media.tabletLandscape} {
    gap: 2rem;
  }
`;

const WhatWeStriveForNumber = styled.div`
  font-weight: 600;
  font-size: 5rem;
  color: var(--color-main-dark);
  align-self: start;

  @media ${media.tabletLandscape} {
    font-size: 4rem;
  }
`;

function WhatWeStriveFor() {
  const { language } = useLanguageContext();
  const { openModal, setOpenModal } = useModalContext();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <StyledWhatWeStriveFor>
      <Header type="secondary" textColor="#1CAC78">
        {language === "English" ? " What we strive for" : "Нашите цели"}
      </Header>
      <WhatWeStriveForCardContainer>
        <WhatWeStriveForCard data-aos="fade-up">
          <WhatWeStriveForNumber>01</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            {language === "English"
              ? "Creative Innovation: Pushing the boundaries of design to craft unique and personalized nice landscapes."
              : "Креативна иновация: Разширяване на границите на дизайна за създаване на уникални и персонални ландшафти."}
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard data-aos="fade-up">
          <WhatWeStriveForNumber>02</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            {language === "English"
              ? "Sustainability: Prioritizing eco-friendly practices and materials which protect nature and the environment."
              : "Устойчивост: Приоритизиране на екологично съобразени практики и материали за опазване на околната среда."}
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard data-aos="fade-up">
          <WhatWeStriveForNumber>03</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            {language === "English"
              ? "Quality Craftsmanship: Ensuring every detail is executed to perfection according to the design requested."
              : "Качествена изработка: Гарантиране, че всеки детайл е изпълнен до съвършенство според изискванията на дизайнът."}
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard data-aos="fade-up">
          <WhatWeStriveForNumber>04</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            {language === "English"
              ? "Customer-Centric Approach: Listening to our clients and tailoring solutions to meet their needs."
              : "Подход, ориентиран към клиента: Слушаме нашите клиенти и създаваме решения, съобразени с техните нужди."}
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard data-aos="fade-up">
          <WhatWeStriveForNumber>05</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            {language === "English"
              ? "Community Impact: Creating spaces that bring people together and enhance their quality of life."
              : "Въздействие върху общността: Създаваме красиви зелени пространства, които събират и сплотяват хората."}
          </StyledWhatWeStriveForP>
        </WhatWeStriveForCard>
        <WhatWeStriveForCard data-aos="fade-up">
          <WhatWeStriveForNumber>06</WhatWeStriveForNumber>
          <StyledWhatWeStriveForP>
            {language === "English"
              ? "At Green Company, we believe that every outdoor space has the potential to inspire and connect people."
              : "В Green Company вярваме, че всяко външно пространство има потенциала да вдъхновява и свързва хората."}
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
