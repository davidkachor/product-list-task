import styled from 'styled-components'
import Button from '@/components/common/Button'
import { BUTTON_RED_COLOR } from '@/variables'
import { Link } from 'react-router-dom'

export const Item = styled.article`
	display: flex;
	background: white;
	padding: 10px;
	border-radius: 5px;
	gap: 10px;
`

export const Image = styled.img.attrs({
	alt: 'product image',
	width: 100,
	height: 100,
})`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 3px;
`

export const TitleButtonContainer = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Title = styled(Link)`
	font-weight: bold;
`

export const Remove = styled(Button).attrs({
	bgColor: BUTTON_RED_COLOR,
})`
	max-width: 200px;
	align-self: flex-end;
`
