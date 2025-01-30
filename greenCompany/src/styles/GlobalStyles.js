import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-font-main: #ccc;
  --color-main-dark: #1CAC78;
  --color-main-light: #D0F0C0;
  --color-font-static: #FFFFFF;
  --color-font-hover: #CFB53B;
  --color-grey: #36454F;
  --color-white: #FFFFFF;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-font-static);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}



// ANIMATIONS
@keyframes constantPopUp {
  0% {
   transform: scale(1)
  }
  50% {
    transform: scale(1.1)
  }
  100% {
    transform: scale(1)
  }
};

@keyframes leftToRight {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
};

@keyframes RightToLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
};

@keyframes bottomUpwards {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes topToBottom {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes startSmallGoBig {
  0% {
    opacity: 0;
    transform: scale(0.0001);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
`;

export default GlobalStyles;
