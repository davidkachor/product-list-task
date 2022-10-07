import styled from 'styled-components'
import Button from '../Button'
import { BUTTON_GREY_COLOR } from '@/variable'

export const FormController = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: auto;

	label {
		font-weight: bold;
	}
`

export const SizeWrapper = styled.div`
	display: flex;
	gap: 10px;

	& > div {
		width: calc(50% - 5px);
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const Input = styled.input`
	border-radius: 8px;
	border: solid 2px gray;
	padding: 10px;
	font-size: 16px;
	min-width: 0;
`

export const Select = styled.select`
	border-radius: 8px;
	border: none;
	font-weight: bold;
	font-size: 16px;
`

export const InputWrapper = styled.div`
	display: flex;
	gap: 5px;
	width: 100%;
	box-sizing: border-box;
	border-radius: 8px;
	border: solid 2px gray;

	input {
		border: none;
		flex: 1 1 auto;
	}
`
export const Check = styled(Button).attrs({
	bgColor: BUTTON_GREY_COLOR,
})``

export const Image = styled.img.attrs({
	width: 100,
	height: 100
})`
	object-fit: cover;
	border-radius: 10px;
	margin: 0 auto;
`
