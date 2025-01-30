import styled from "styled-components";
// import Button from "./Button";
import { useModalContext } from "../Context/ModalContext";
import Header from "./Header";
import { launchAlertCenteredWithFadeInDown } from "../Utils/alert";

const StyledContactForm = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  /* font-size: 1.2rem;
  font-weight: 700; */
  /* margin-left: 2rem; */
  /* margin-top: 0.7rem; */
  /* display: block;
  transition: all 0.5s;
  color: var(--color-grey);
  opacity: 0; */
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-grey);
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  pointer-events: none; /* Make label non-interactive */
`;
const StyledLabelInputContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  /* font-size: 1.5rem;
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

  &:focus {
    border-bottom: 3px solid var(--color-main-dark);
  }

  &:focus + ${StyledLabel}, &:valid + ${StyledLabel} {
    top: 0;
    font-size: 1rem;
    transform: translateY(-100%);
    color: var(--color-main-dark);
  } */

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

  &:focus {
    /* border-bottom: 3px solid var(--color-main-dark); */
    border: 1px solid var(--color-main-dark);
  }
  &:active {
    /* border-bottom: 3px solid var(--color-main-dark); */
    border: 1px solid var(--color-main-dark);
  }

  &:focus + ${StyledLabel}, &:valid + ${StyledLabel} {
    top: 0;
    font-size: 1rem;
    transform: translateY(-100%);
    color: var(--color-main-dark);
  }
`;

const StyledTextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: both;
  color: var(--color-grey);
  width: 100%;

  &:focus {
    /* border-bottom: 3px solid var(--color-main-dark); */
    border: 1px solid var(--color-main-dark);
  }
  &:active {
    /* border-bottom: 3px solid var(--color-main-dark); */
    border: 1px solid var(--color-main-dark);
  }

  &:focus + ${StyledLabel}, &:valid + ${StyledLabel} {
    top: 0;
    font-size: 1rem;
    transform: translateY(-100%);
    color: var(--color-main-dark);
  }
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
    const { value: email } = e.target.elements.email;
    const { value: name } = e.target.elements.name;
    const { value: question } = e.target.elements.question;
    if (!email || !name || !question) {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "Please fill all required fields",
        "All fields are required"
      );
      return;
    }
    setOpenModal(false);
    launchAlertCenteredWithFadeInDown(
      "success",
      "Form submitted successfully!",
      "Thank you contacting Green Company"
    );
  }
  return (
    <StyledContactForm onSubmit={OnSubmitForm}>
      <Header type="secondary" textColor="#1CAC78">
        Contact Form
      </Header>

      <StyledLabelInputContainer>
        <StyledInput
          id="email"
          //   placeholder="Your email"
          type="email"
        />
        <StyledLabel htmlFor="email">Your Email:</StyledLabel>
      </StyledLabelInputContainer>

      <StyledLabelInputContainer>
        <StyledInput id="name" type="text" />
        <StyledLabel htmlFor="name">Your Name:</StyledLabel>
      </StyledLabelInputContainer>

      <StyledLabelInputContainer>
        <StyledTextArea id="question" rows="6" cols="50" />
        <StyledLabel htmlFor="question">Your Question:</StyledLabel>
      </StyledLabelInputContainer>

      <FormButton type="submit">Send form</FormButton>
    </StyledContactForm>
  );
}

export default ContactForm;
