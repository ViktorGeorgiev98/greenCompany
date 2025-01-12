import styled, { css } from "styled-components";

const animation = {
  leftToRight: css`
    animation: leftToRight 1.5s ease-in-out forwards;
  `,
  leftToRightSecondary: css`
    animation: leftToRight 1.5s ease-in-out 0.5s forwards;
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
`;

const StyledHeaderTertiary = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-font-static);
  opacity: 0;
  transform: translateX(-100%);
  ${(props) => animation[props.animation] || ""};
  /* animation-delay: 0.5s; */
`;

function Header({ type, animation, children }) {
  if (type === "main") {
    return <StyledH1 animation={animation}>{children}</StyledH1>;
  }
  if (type === "secondary") {
    return (
      <StyledHeaderTertiary animation={animation}>
        {children}
      </StyledHeaderTertiary>
    );
  }
}

export default Header;
