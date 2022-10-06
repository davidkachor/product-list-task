import React from 'react'

import { Wrapper } from './styled'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../hooks'
import NotFound from '../../../pages/NotFound'
import ProductItem from './ProductItem'

const Main: React.FC = () => {
	const { id } = useParams()
	const item = useAppSelector(state => state.products.find(e => e.id === id))
	if (!item) return <NotFound />

	return (
		<Wrapper>
			<ProductItem {...item} />
		</Wrapper>
	)
}

export default Main
