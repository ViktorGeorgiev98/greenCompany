import styled from "styled-components";
import myImage from "../public/images/logo_transparent.png";
const StyledLogo = styled.div`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  height: 12rem;
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
