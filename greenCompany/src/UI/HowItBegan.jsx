import styled from "styled-components";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StyledHowItBegan = styled.div`
  padding: 6rem 20rem 12rem 20rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledHowItBeganP = styled.p`
  font-size: 2rem;
  color: var(--color-grey);
  font-style: italic;
  font-weight: 400;
`;

function HowItBegan() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <StyledHowItBegan>
      <Header type="secondary" textColor="#1CAC78">
        How it began
      </Header>
      <StyledHowItBeganP data-aos="fade-right">
        Our story started with a shared vision between two friends who combined
        their unique talents to transform ordinary outdoor spaces into
        extraordinary experiences. George brought architectural expertise, while
        Dimitur added the technical know-how and a hands-on approach. Together,
        they founded Green Company with the mission to redefine landscape design
        and construction.
      </StyledHowItBeganP>
      <StyledHowItBeganP data-aos="fade-left">
        From humble beginnings to becoming a trusted name in the industry, our
        journey has been guided by a commitment to innovation, sustainability,
        and customer satisfaction. Every project is an opportunity to bring a
        client’s vision to life while respecting the natural environment.
      </StyledHowItBeganP>
    </StyledHowItBegan>
  );
}

export default HowItBegan;
