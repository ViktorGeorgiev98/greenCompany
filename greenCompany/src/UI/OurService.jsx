import styled from "styled-components";
import projectPaper from "../public/images/projectPaper.jpg";
import Header from "./Header";
const StyledOurService = styled.section`
  padding: 10rem 15rem;
  background: linear-gradient(
    to right,
    var(--color-main-light),
    var(--color-main-dark)
  );
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledOutOfServiceGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 6rem;
  grid-row-gap: 8rem;
  justify-items: center;
  align-items: center;
  max-width: 60%;
  margin-top: 6rem;
`;

const OurServiceCardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  /* max-width: 50%; */
  background-color: var(--color-white);
  transition: all 0.5s ease-out;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 0.5rem;
  &:hover {
    transform: translateY(-2rem);
  }
  overflow: hidden;
`;

const OurServiceCardImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const OurServiceCardTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-grey);
  padding: 2rem;
`;

const OurServiceCardText = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-grey);
  padding: 2rem;
  padding-top: 0;
`;

function OurService() {
  return (
    <StyledOurService>
      <Header type="secondary" textColor="#36454F">
        Our Service
      </Header>
      <StyledOutOfServiceGridRow>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={projectPaper}
            alt="Project"
          ></OurServiceCardImg>
          <OurServiceCardTitle>Design & Project</OurServiceCardTitle>
          <OurServiceCardText>
            We are making the design and project based on your vision
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={projectPaper}
            alt="Project"
          ></OurServiceCardImg>
          <OurServiceCardTitle>Design & Project</OurServiceCardTitle>
          <OurServiceCardText>
            We are making the design and project based on your vision
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={projectPaper}
            alt="Project"
          ></OurServiceCardImg>
          <OurServiceCardTitle>Design & Project</OurServiceCardTitle>
          <OurServiceCardText>
            We are making the design and project based on your vision
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={projectPaper}
            alt="Project"
          ></OurServiceCardImg>
          <OurServiceCardTitle>Design & Project</OurServiceCardTitle>
          <OurServiceCardText>
            We are making the design and project based on your vision
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={projectPaper}
            alt="Project"
          ></OurServiceCardImg>
          <OurServiceCardTitle>Design & Project</OurServiceCardTitle>
          <OurServiceCardText>
            We are making the design and project based on your vision
          </OurServiceCardText>
        </OurServiceCardItem>
        <OurServiceCardItem>
          <OurServiceCardImg
            src={projectPaper}
            alt="Project"
          ></OurServiceCardImg>
          <OurServiceCardTitle>Design & Project</OurServiceCardTitle>
          <OurServiceCardText>
            We are making the design and project based on your vision
          </OurServiceCardText>
        </OurServiceCardItem>
      </StyledOutOfServiceGridRow>
    </StyledOurService>
  );
}

export default OurService;
