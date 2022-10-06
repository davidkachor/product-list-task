import styled from 'styled-components'
import Button from '../Button'

export const Layout = styled.div`
	position: fixed;
	z-index: 100;
	width: 100vw;
	height: 100vh;
	background: #00000082;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`

export const Title = styled.h2``

export const CloseButton = styled(Button)`
	padding: 5px !important;
`

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	margin-top: 10px;
`

export const ControlBtn = styled(Button)<{
	isSubmittable?: boolean
}>`
	flex: 1 1 auto;
	cursor: ${props => !props.isSubmittable && 'default'};
	&:hover {
		${props => !props.isSubmittable && 'filter: none'}
	}
`
