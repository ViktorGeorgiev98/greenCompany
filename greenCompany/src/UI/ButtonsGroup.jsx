import styled, { css } from "styled-components";

const animation = {
  bottomUpwards: css`
    animation: bottomUpwards 1s ease-out forwards;
  `,
};

const StyledButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  opacity: 0;
  transform: translateX(200%);
  ${(props) => css`
    ${animation[props.animation] || ""};
    animation-delay: ${props.delay || "0s"};
  `}
`;

function ButtonsGroup({ animation, delay, children }) {
  return (
    <StyledButtonsGroup animation={animation} delay={delay}>
      {children}
    </StyledButtonsGroup>
  );
}

export default ButtonsGroup;
