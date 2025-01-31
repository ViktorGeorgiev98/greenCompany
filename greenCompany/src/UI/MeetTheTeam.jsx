import styled from "styled-components";
import Header from "./Header";
import avatar1 from "../public/images/avatar1.jpg";
import avatar2 from "../public/images/avatar2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLanguageContext } from "../Context/LanguageContext";

const StyledMeetTheTeam = styled.div`
  padding: 6rem 12rem 12rem 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
`;

const StyledMeetTheTeamContainer = styled.div`
  padding: 0 6rem 6rem 6rem;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  grid-gap: 12rem;
`;

const StyledMeetTheTeamCardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-height: 85%;
  background-color: var(--color-white);
  transition: all 0.4s ease-out;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 0.5rem;
  &:hover {
    transform: translateY(-2rem) scale(1.1);
  }
  overflow: hidden;
`;

const StyledMeetTheTeamCardImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const StyledMeetTheTeamCardTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-font-hover);
  padding: 1.5rem;
`;

const StyledMeetTheTeamCardText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey);
  padding: 2.5rem;
  padding-top: 0;
`;

function MeetTheTeam() {
  const { language } = useLanguageContext();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <StyledMeetTheTeam>
      <Header type="secondary" textColor=" #FFFFFF">
        {language === "English" ? "Meet the Team" : "Запознайте се с екипа"}
      </Header>
      <StyledMeetTheTeamContainer>
        {/* George's Card */}
        <StyledMeetTheTeamCardItem data-aos="fade-right">
          <StyledMeetTheTeamCardImg src={avatar1} alt="George" />
          <StyledMeetTheTeamCardTitle>George</StyledMeetTheTeamCardTitle>
          <StyledMeetTheTeamCardText>
            {language === "English"
              ? `With a deep passion for blending creativity and functionality, George is the visionary architect behind our designs. 
                 He holds a degree in Architecture from LASG Sofia and specializes in crafting harmonious outdoor spaces that seamlessly connect nature with modern living. 
                 His meticulous attention to detail ensures that every project is not only aesthetically stunning but also structurally sound. 
                 Inspired to enter the landscape design industry, George strives to bring people closer to nature and create environments that foster relaxation and inspiration.`
              : `С дълбока страст към съчетаването на креативност и функционалност, Георги е визионерът архитект зад нашите проекти.
                 Той притежава диплома по архитектура от LASG София и се специализира в създаването на хармонични външни пространства, 
                 които свързват природата с модерния начин на живот. Неговото внимание към детайла гарантира, че всеки проект 
                 е не само естетически впечатляващ, но и конструктивно стабилен. Вдъхновен да навлезе в сферата на ландшафтния дизайн, 
                 Георги се стреми да доближи хората до природата и да създаде среди, които насърчават релаксация и вдъхновение.`}
          </StyledMeetTheTeamCardText>
        </StyledMeetTheTeamCardItem>

        {/* Dimitur's Card */}
        <StyledMeetTheTeamCardItem data-aos="fade-left">
          <StyledMeetTheTeamCardImg src={avatar2} alt="Dimitur" />
          <StyledMeetTheTeamCardTitle>Dimitur</StyledMeetTheTeamCardTitle>
          <StyledMeetTheTeamCardText>
            {language === "English"
              ? `As the physical work expert and technical lead, Dimitur ensures that every design comes to life with precision and excellence. 
                 With a background in Engineering from LASG Sofia and years of hands-on experience in landscape construction, 
                 he is an expert in turning complex ideas into reality. Dimitur's dedication to quality craftsmanship and sustainable practices 
                 stems from a desire to make outdoor spaces functional, beautiful, and long-lasting. 
                 His passion for this industry comes from a love for creating spaces where families and communities can thrive.`
              : `Като експерт по физическата работа и технически ръководител, Димитър гарантира, че всеки проект се реализира с прецизност и високи стандарти. 
                 С образование по инженерство от LASG София и години практически опит в ландшафтното строителство, 
                 той е експерт в превръщането на сложни идеи в реалност. Неговата отдаденост към качественото занаятчийство 
                 и устойчивите практики произтича от желанието му да създава външни пространства, които са функционални, 
                 красиви и дълготрайни. Страстта му към тази индустрия идва от любовта към създаването на среди, 
                 където семейства и общности могат да процъфтяват.`}
          </StyledMeetTheTeamCardText>
        </StyledMeetTheTeamCardItem>
      </StyledMeetTheTeamContainer>
    </StyledMeetTheTeam>
  );
}

export default MeetTheTeam;
