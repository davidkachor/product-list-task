import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.textarea.attrs({
    placeholder: 'Type your comment here'
})`
  font-size: 16px;
  padding: 10px;
  border: 2px solid gray;
  border-radius: 5px;
  max-width: 100%;
  resize: vertical;
`