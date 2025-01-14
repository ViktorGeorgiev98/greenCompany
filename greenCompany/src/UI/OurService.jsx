import styled from "styled-components";

const StyledOurService = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  justify-items: center;
  align-items: center;
  padding: 12rem;
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  width: 100%;
`;

function OurService() {}

export default OurService;
