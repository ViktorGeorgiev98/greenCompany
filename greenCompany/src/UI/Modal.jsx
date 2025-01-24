import styled from "styled-components";
import { useModalContext } from "../Context/ModalContext";
import Button from "./Button";

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(0.5rem);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModalContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  margin: 0;
  border-radius: 1rem;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  max-width: 50rem;
  width: 60%;
  text-align: center;
  opacity: 0;
  transform: scale(0.01);
  animation: startSmallGoBig ease-out 1.5s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 4rem; */
  flex-direction: column;
  position: relative;
`;

const StyledModalButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 0.6rem;
  right: 2rem;
  font-size: 3rem;
  color: var(--color-grey);
`;

function Modal({ children }) {
  const { openModal, setOpenModal } = useModalContext();
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <StyledModalButton onClick={() => setOpenModal(false)}>
          &times;
        </StyledModalButton>
        {children}
      </StyledModalContainer>
    </StyledModalBackground>
  );
}

export default Modal;
