import styled, { css } from "styled-components";

const animation = {
  leftToRight: css`
    animation: leftToRight 1.5s ease-in-out forwards;
  `,
  leftToRightSecondary: css`
    animation: leftToRight 1.5s ease-out forwards;
  `,
};

const StyledH1 = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  color: var(#ffffff);
  letter-spacing: 1rem;
  text-transform: uppercase;
  opacity: 0;
  transform: translateX(-100%);
  ${(props) => animation[props.animation] || ""};
  animation-delay: ${(props) => props.delay || "0s"};
`;

// const StyledHeaderTertiary = styled.h3`
//   font-size: 2.2rem;
//   font-weight: 600;
//   color: var(--color-font-static);
//   opacity: 0;
//   transform: translateX(-100%);
// `;
const StyledHeaderTertiary = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-font-static);
  opacity: 0;
  transform: translateX(-100%);
  ${(props) => css`
    ${animation[props.animation] || ""}
    animation-delay: ${props.delay || "0s"};
  `}
`;

function Header({ type, animation, delay, children }) {
  if (type === "main") {
    return (
      <StyledH1 animation={animation} delay={delay}>
        {children}
      </StyledH1>
    );
  }
  if (type === "secondary") {
    return (
      <StyledHeaderTertiary animation={animation} delay={delay}>
        {children}
      </StyledHeaderTertiary>
    );
  }
}

export default Header;
