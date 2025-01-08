import styled from "styled-components";
import myImage from "../public/images/logo.png";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.8rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={myImage} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
