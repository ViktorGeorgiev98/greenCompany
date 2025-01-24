import styled from "styled-components";
import Button from "./Button";
import { useModalContext } from "../Context/ModalContext";
import Header from "./Header";

const StyledContactForm = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  /* margin-left: 2rem; */
  /* margin-top: 0.7rem; */
  display: block;
  transition: all 0.5s;
  color: var(--color-grey);
  opacity: 0;
`;
const StyledLabelInputContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  color: var(--color-grey);
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 100%;
  display: block;
  transition: all 0.3s;
`;

const StyledTextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: both;
  color: var(--color-grey);
  width: 100%;
`;

const FormButton = styled.button`
  font-size: 2rem;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  color: var(--color-grey);
  background-color: var(--color-main-dark);
  transition: all 0.5s;
  padding: 1rem 3rem;
  width: 100%;
  &:hover {
    background-color: var(--color-font-hover);
    transform: scale(1.05);
  }
`;

function ContactForm() {
  const { openModal, setOpenModal } = useModalContext();
  function OnSubmitForm(e) {
    e.preventDefault();
    setOpenModal(false);
    alert("Form submitted!");
  }
  return (
    <StyledContactForm onSubmit={OnSubmitForm}>
      <Header type="secondary" textColor="#1CAC78">
        Contact Form
      </Header>
      <StyledLabelInputContainer>
        <StyledLabel htmlFor="email">Your Email:</StyledLabel>
        <StyledInput
          id="email"
          placeholder="Your email:"
          type="email"
          required
        />
      </StyledLabelInputContainer>
      <StyledLabelInputContainer>
        <StyledLabel htmlFor="name">Your Name:</StyledLabel>
        <StyledInput id="name" placeholder="Your Name:" type="text" required />
      </StyledLabelInputContainer>
      <StyledTextArea
        id="question"
        required
        rows="6"
        cols="50"
        placeholder="Your Question:"
      ></StyledTextArea>
      <FormButton type="submit">Send form</FormButton>
    </StyledContactForm>
  );
}

export default ContactForm;
