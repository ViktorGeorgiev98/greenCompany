import styled from "styled-components";

const StyledButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

function ButtonsGroup({ children }) {
  return <StyledButtonsGroup>{children}</StyledButtonsGroup>;
}

export default ButtonsGroup;
