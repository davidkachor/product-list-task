import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    filter: brightness(1.2);
  }
`