import styled from "styled-components";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguageContext } from "../Context/LanguageContext";
import { media } from "../Utils/constants";

const StyledHowItBegan = styled.div`
  padding: 6rem 20rem 12rem 20rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${media.tabletLandscape} {
    padding: 6rem 10rem 10rem 10rem;
  }
`;

const StyledHowItBeganP = styled.p`
  font-size: 2rem;
  color: var(--color-grey);
  font-style: italic;
  font-weight: 400;

  @media ${media.tabletLandscape} {
    font-size: 1.8rem;
  }
`;

function HowItBegan() {
  const { language } = useLanguageContext();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <StyledHowItBegan>
      <Header type="secondary" textColor="#1CAC78">
        {language === "English" ? "How it began" : "Как започна всичко"}
      </Header>
      <StyledHowItBeganP data-aos="fade-right">
        {language === "English"
          ? "Our story started with a shared vision between two friends who combined their unique talents to transform ordinary outdoor spaces into extraordinary experiences. George brought architectural expertise, while Dimitur added the technical know-how and a hands-on approach. Together, they founded Green Company with the mission to redefine landscape design and construction."
          : "Нашата история започна с обща визия между двама приятели, които обединиха уникалните си таланти, за да превърнат обикновените външни пространства в изключителни преживявания. Георги внесе архитектурната си експертиза, а Димитър добави техническите си умения и практическия си подход. Заедно основаха Green Company с мисията да преосмислят ландшафтния дизайн и строителството."}
      </StyledHowItBeganP>
      <StyledHowItBeganP data-aos="fade-left">
        {language === "English"
          ? "From humble beginnings to becoming a trusted name in the industry, our journey has been guided by a commitment to innovation, sustainability, and customer satisfaction. Every project is an opportunity to bring a client’s vision to life while respecting the natural environment."
          : "От скромното ни начало до превръщането ни в утвърдено име в индустрията, нашето пътуване е водено от ангажимент към иновациите, устойчивостта и удовлетвореността на клиентите. Всеки проект е възможност да превърнем визията на клиента в реалност, като същевременно уважаваме естествената среда."}
      </StyledHowItBeganP>
    </StyledHowItBegan>
  );
}

export default HowItBegan;
