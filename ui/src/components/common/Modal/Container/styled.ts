import styled, { css } from 'styled-components'

const Container = css`
	background: white;
	padding: 15px;
	width: 450px;
	box-sizing: border-box;
	max-width: calc(100% - 20px);
	border-radius: 8px;
	z-index: 101;
`

export const FormContainer = styled.form`
	${Container}
`

export const NormalContainer = styled.div`
	${Container}
`
