import React from 'react'
import { ListWrapper, MainStyled } from './styled'
import { useAppSelector } from '../../../hooks'

const Main: React.FC = () => {
	const items = useAppSelector(state => state.products)

	return <MainStyled />
}

export default Main
