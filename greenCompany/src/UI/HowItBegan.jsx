import styled from "styled-components";
import Header from "./Header";

const StyledHowItBegan = styled.div`
  padding: 12rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`;

function HowItBegan() {
  return (
    <StyledHowItBegan>
      <Header type="secondary">How it began</Header>
    </StyledHowItBegan>
  );
}

export default HowItBegan;
