import styled from 'styled-components'

const Button = styled.button`
  color: inherit;
  font-size: 2rem;
  padding: 1rem 1.2rem;
  outline: 0;
  border: none;
  border-radius: 1rem;
  font-weight: medium;
  cursor: pointer;
  transition: scale 200ms ease-in-out;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-gap: 1rem;
  align-items: center;

  :hover {
    scale: 1.1;
  }
`

const ButtonPrimary = styled(Button)`
  background: var(--primary);
  color: var(--white);

  svg {
    fill: var(--white);
    width: 2rem;
    height: auto;
  }
`

const ButtonPrimaryRounded = styled(ButtonPrimary)`
  border-radius: 50%;
  padding: 1.5rem;

  svg {
    width: 3rem;
    height: auto;
  }
`

export { Button, ButtonPrimary, ButtonPrimaryRounded }
