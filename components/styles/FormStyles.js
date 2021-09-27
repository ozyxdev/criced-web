import styled from 'styled-components'

const FormStyles = styled.form`
  width: 100%;
  margin: auto;

  label {
    display: block;
    margin-bottom: 1.5rem;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 0.5rem;
    padding: 1.5rem;
    border-radius: 1rem;
    transition: all ease-in-out 200ms;
    border: 2px solid #8c8ca1;

    &:focus,
    &:focus-visible,
    &:active {
      border: 1px solid var(--primary);
      outline: 0;
      box-shadow: 0 0 0 2px var(--primary);
    }
  }

  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }
`

export default FormStyles
