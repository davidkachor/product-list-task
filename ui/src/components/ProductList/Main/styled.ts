import styled from 'styled-components'

export const MainStyled = styled.main`
	display: flex;
	padding: 10px;
	justify-content: center;
	align-items: center;
`

export const ListWrapper = styled.ul`
	background: #d3d3d3;
	padding: 10px;
	border-radius: 5px;
	width: 600px;
	box-sizing: border-box;
	max-width: calc(100% - 20px);
	gap: 10px;
	display: flex;
	flex-direction: column;
`

export const Message = styled.p`
	font-weight: bold;
	font-size: 20px;
`
