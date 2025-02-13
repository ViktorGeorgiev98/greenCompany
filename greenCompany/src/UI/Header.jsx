import styled, { css } from "styled-components";
import { media } from "../Utils/constants";

const animation = {
  leftToRight: css`
    animation: leftToRight 1.5s ease-in-out forwards;
  `,
  leftToRightSecondary: css`
    animation: leftToRight 1.5s ease-out forwards;
  `,
  topToBottom: css`
    animation: topToBottom 1.5s ease-out forwards;
  `,
  bottomUpwards: css`
    animation: bottomUpwards 1.5s ease-out forwards;
  `,
};

const StyledH1 = styled.h1`
  font-size: 6.5rem;
  font-weight: 600;
  color: var(#ffffff);
  letter-spacing: 1rem;
  text-transform: uppercase;
  opacity: 0;
  transform: translateX(-100%);
  ${(props) => animation[props.animation] || ""};
  animation-delay: ${(props) => props.delay || "0s"};

  @media ${media.laptop} {
    font-size: 5.8rem;
  }

  @media ${media.tabletLandscape} {
    font-size: 5rem;
  }

  @media ${media.mobile} {
    font-size: 2.5rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) =>
    css`
      ${props.textColor || "#1CAC78"}
    `};
  letter-spacing: 1rem;
  transition: all 0.5s ease-out;
  &:hover {
    color: var(--color-font-hover);
    transform: scale(1.05) rotate(5deg);
  }

  @media ${media.tabletLandscape} {
    font-size: 2.6rem;
  }

  @media ${media.mobile} {
    font-size: 1.6rem;
  }
`;

const StyledHeaderTertiary = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${(props) => props.textColor || "#FFFFFF"};
  opacity: 0;
  transform: translateX(-100%);
  ${(props) => css`
    ${animation[props.animation] || ""}
    animation-delay: ${props.delay || "0s"};
  `}

  @media ${media.laptop} {
    font-size: 2rem;
  }

  @media ${media.tabletLandscape} {
    font-size: 2rem;
  }
  @media ${media.tabletPortrait} {
    font-size: 1.6rem;
  }

  @media ${media.mobile} {
    font-size: 1.4rem;
  }
`;

function Header({ type, animation, delay, textColor, children }) {
  if (type === "main") {
    return (
      <StyledH1 animation={animation} delay={delay}>
        {children}
      </StyledH1>
    );
  }
  if (type === "secondary") {
    return (
      <StyledH2 animation={animation} delay={delay} textColor={textColor}>
        {children}
      </StyledH2>
    );
  }
  if (type === "tertiary") {
    return (
      <StyledHeaderTertiary
        animation={animation}
        delay={delay}
        textColor={textColor}
      >
        {children}
      </StyledHeaderTertiary>
    );
  }
}

export default Header;
