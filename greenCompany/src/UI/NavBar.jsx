import styled from "styled-components";
import { useLanguageContext } from "../Context/LanguageContext";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { bg, english, media } from "../Utils/constants";
import bgFlag from "../public/images/Flag_of_Bulgaria.svg.png";
import englishFlag from "../public/images/englishFlag.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  /* position: absolute;
  top: 0; */
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  background-size: cover;

  @media ${media.mobile} {
    padding: 1rem 2rem;
  }
`;

const StyledNav = styled.nav`
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 4rem;
  align-items: center;

  @media ${media.mobile} {
    gap: 3rem;
  }
`;

const StyledLi = styled.li`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  color: var(#ffffff);
  text-decoration: none;
  transition: 0.5s all;
  font-weight: 600;
  padding-bottom: 0.4rem;
  font-size: 2rem;
  position: relative;

  &:hover {
    color: var(--color-font-hover);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: var(--color-font-hover);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media ${media.mobile} {
    font-size: 1.4rem;
  }
`;

const StyledI = styled.i`
  display: inline-block;
  width: ${(props) => props.size || "24px"};
  height: ${(props) => props.size || "24px"};
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

function NavBar() {
  const { language, setLanguage } = useLanguageContext();
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="home">
              {language === "English"
                ? english.headerHomeTab
                : bg.headerHomeTab}
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="about">
              {language === "English"
                ? english.headerAboutTab
                : bg.headerAboutTab}
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledI
              src={language === "English" ? bgFlag : englishFlag}
              size="3rem"
              onClick={() =>
                setLanguage(language === "English" ? "Bulgarian" : "English")
              }
            />
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

export default NavBar;
