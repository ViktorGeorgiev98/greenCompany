import styled from "styled-components";
import Header from "./Header";

const StyledHowItWorks = styled.section`
  /* height: 100vh; */
  width: 100%;
  background: var(--color-white);
  padding: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHowItWorksContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
`;

function HowItWorks() {
  return (
    <StyledHowItWorks>
      <Header type="secondary">How it works</Header>
      <StyledHowItWorksContainer>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
      </StyledHowItWorksContainer>
    </StyledHowItWorks>
  );
}

export default HowItWorks;
