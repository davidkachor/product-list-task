import React from 'react'
import { Product } from '../../../../types'

import { Item, Image, Title, Remove, TitleButtonContainer } from './styled'

const ProductItem: React.FC<Product> = ({ name, id, imageUrl }) => {
	return (
		<Item>
			<Image src={imageUrl} />
			<TitleButtonContainer>
				<Title>{name}</Title>
				<Remove>Remove</Remove>
			</TitleButtonContainer>
		</Item>
	)
}

export default ProductItem
