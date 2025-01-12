import styled, { css } from "styled-components";

const animation = {
  secondary: css`
    transform: scale(1.05);
  `,
  primary: css`
    animation: constantPopUp 1s infinite ease-in-out;
  `,
};

const type = {
  primary: css`
    background-color: var(--color-font-hover);
  `,
};

const Button = styled.button`
  padding: 1rem 4rem;
  font-size: 2rem;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  color: var(--color-grey);
  background-color: var(--color-font-static);
  transition: all 0.5s;

  &:hover {
    ${(props) => {
      return animation[props.animation] || "";
    }};
  }
  ${(props) => {
    return type[props.type] || "";
  }};
`;

export default Button;