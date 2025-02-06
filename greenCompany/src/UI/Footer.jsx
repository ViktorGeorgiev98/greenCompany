import styled from "styled-components";
import Logo from "./Logo";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { useLanguageContext } from "../Context/LanguageContext";
import { media } from "../Utils/constants";

const StyledFooter = styled.footer`
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  background-size: cover;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 12rem;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  grid-column-gap: 4rem;

  @media ${media.tabletLandscape} {
    padding: 6rem;
  }

  @media ${media.tabletPortrait} {
    padding: 3rem;
  }
`;
const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 3rem;
  @media ${media.tabletLandscape} {
    align-self: center;
  }
`;

const StyledSocialRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media ${media.tabletPortrait} {
    gap: 1rem;
  }
`;

const StyledIcon = styled.div`
  cursor: pointer;
  /* width: 2rem;
  height: 2rem; */
`;

const StyledP = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey);

  @media ${media.tabletPortrait} {
    font-size: 1.4rem;
  }
`;

const FooterH3 = styled.h3`
  color: var(--color-grey);
  font-weight: 600;
  font-size: 2rem;

  @media ${media.tabletPortrait} {
    font-size: 1.6rem;
  }
`;

const StyledFooterA = styled.a`
  color: var(--color-grey);
  transition: all 0.5s;
  cursor: pointer;
  position: relative;
  &:hover {
    color: var(--color-font-static);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: var(--color-white);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
function Footer() {
  const { language } = useLanguageContext();
  return (
    <StyledFooter>
      <StyledFooterColumn>
        <Logo />
        <StyledSocialRow>
          <StyledFooterA href="#">
            <StyledIcon>
              <AiFillFacebook fill="#36454F" size="2.5rem" />
            </StyledIcon>
          </StyledFooterA>
          <StyledFooterA href="#">
            <StyledIcon>
              <AiFillInstagram fill="#36454F" size="2.5rem" />
            </StyledIcon>
          </StyledFooterA>
          <StyledFooterA href="#">
            <StyledIcon>
              <AiFillTwitterCircle fill="#36454F" size="2.5rem" />
            </StyledIcon>
          </StyledFooterA>
        </StyledSocialRow>
        <StyledP>
          Copyright © 2027 by Green Company, Inc.{" "}
          {language === "English"
            ? "All rights reserved"
            : "Всички права запазени"}
          .
        </StyledP>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <FooterH3>{language === "English" ? "Contacts" : "Контакти"}</FooterH3>
        <StyledP>123 Test Street Sofia Bulgaria</StyledP>
        <StyledSocialRow>
          <AiFillPhone fill="#36454F" size="2.5rem" />
          <StyledFooterA href="tel:1234567890">1234567890</StyledFooterA>
        </StyledSocialRow>
        <StyledSocialRow>
          <AiOutlineMail fill="#36454F" size="2.5rem" />
          <StyledFooterA href="emailto:GreenCompany@gmail.com">
            GreenCompany@gmail.com
          </StyledFooterA>
        </StyledSocialRow>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <FooterH3>
          {language === "English"
            ? "More information about Landscape Architecture"
            : "Повече информация за ландшафтната архитектура"}
        </FooterH3>
        <StyledFooterA
          target="blank"
          href="https://en.wikipedia.org/wiki/Landscape_architecture#:~:text=Landscape%20architecture%20is%20the%20design,%2Dbehavioural%2C%20or%20aesthetic%20outcomes."
        >
          {language === "English"
            ? "Landscape architecture wiki"
            : "Ландшафтна архитектура уикипедиа"}
        </StyledFooterA>
        <StyledFooterA
          target="blank"
          href="https://worldlandscapearchitect.com/what-is-landscape-architecture/?v=5523c88dd347"
        >
          {language === "English"
            ? "What is landscape architecture?"
            : "Какво е ландшафтна архитектура"}
        </StyledFooterA>
        <StyledFooterA
          target="blank"
          href="https://www.asla.org/aboutlandscapearchitecture.aspx"
        >
          {language === "English"
            ? "Benefits of landscape architecture"
            : "Ползите от ландшафтна архитектура"}
        </StyledFooterA>
      </StyledFooterColumn>
    </StyledFooter>
  );
}

export default Footer;
