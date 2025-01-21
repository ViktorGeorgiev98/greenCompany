import styled from "styled-components";

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
`;

const StyledFooterColumn = styled.div``;
function Footer() {
  return <StyledFooter>footer</StyledFooter>;
}

export default Footer;
