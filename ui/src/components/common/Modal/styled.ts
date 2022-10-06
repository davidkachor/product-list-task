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

export const Container = styled.form`

  background: white;
	padding: 15px;
	width: 450px;
	box-sizing: border-box;
	max-width: calc(100% - 20px);
	border-radius: 8px;
	z-index: 101;
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

export const ControlBtn = styled(Button)`
	flex: 1 1 auto;
`
