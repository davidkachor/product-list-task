import styled from 'styled-components'

export const ButtonStyled = styled.button<{ bgColor?: string }>`
	background: ${props => (props.bgColor ? props.bgColor : '#676767')};
	color: #ffffff;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		filter: invert(100%) sepia(0%) saturate(2176%) hue-rotate(72deg)
			brightness(120%) contrast(112%);
	}

	&:hover {
		filter: brightness(1.2);
	}
`
