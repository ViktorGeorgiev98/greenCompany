import styled from "styled-components";
import { useLanguageContext } from "../Context/LanguageContext";
import Logo from "./Logo";
import { NavLink } from "react-router";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
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

const StyledLink = styled.a``;

function NavBar() {
  const { language, setLanguage } = useLanguageContext();

  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <NavLink>nestho</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink>nestho</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink>nestho</NavLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

export default NavBar;
