import styled from "styled-components";
import { useLanguageContext } from "../Context/LanguageContext";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { bg, english } from "../Utils/constants";
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
`;

const StyledNav = styled.nav`
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 4rem;
  align-items: center;
`;

const StyledLi = styled.li``;

const StyledLink = styled(NavLink)`
  color: var(--color-font-static);
  text-decoration: none;
  transition: 0.5s all;
  font-weight: 600;
  padding-bottom: 0.4rem;
  font-size: 2rem;
  &:hover {
    color: var(--color-font-hover);
    border-bottom: 1px solid var(--color-font-hover);
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
