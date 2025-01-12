import styled from "styled-components";
const StyledH1 = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  color: var(--color-font-static);
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

const StyledHeaderTertiary = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-font-static);
`;

function Header({ type, children }) {
  if (type === "main") {
    return <StyledH1>{children}</StyledH1>;
  }
  if (type === "secondary") {
    return <StyledHeaderTertiary>{children}</StyledHeaderTertiary>;
  }
}

export default Header;
