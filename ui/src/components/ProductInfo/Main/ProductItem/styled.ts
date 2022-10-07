import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
	display: flex;
	gap: 10px;
`

export const Left = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 300px;
`

export const Right = styled.section`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	gap: 10px;

	p {
		font-size: 20px;
	}
`

export const Image = styled.img.attrs({
	alt: 'product image',
	width: 300,
	height: 300,
})`
	width: 300px;
	height: 300px;
	object-fit: cover;
	border-radius: 10px;
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	align-items: center;

	p {
		font-size: 20px;
	}
`

export const ToMain = styled(Link)`
	margin-right: auto;
	font-size: 20px;
`

export const Title = styled.h1`
	font-size: 40px;
`
