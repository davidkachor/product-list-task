import React from 'react'
import { Product } from '../../../../types'

import {
	Container,
	ButtonContainer,
	Title,
	Left,
	Right,
	Image,
	ToMain,
} from './styled'

import CommentItem from './CommentItem'
import Button from '../../../common/Button'
import CommentForm from "../../../common/CommentForm";

const ProductItem: React.FC<Product> = ({
	id,
	count,
	size,
	weight,
	name,
	imageUrl,
	comments,
}) => {
	return (
		<Container>
			<Left>
				<Image src={imageUrl} />
				<CommentForm id={id} />
				{comments.map(e => (
					<CommentItem key={e.id} {...e} />
				))}
			</Left>
			<Right>
				<ButtonContainer>
					<ToMain to="/">Back to product list</ToMain>
					<p>{id}</p>
					<Button>Edit</Button>
				</ButtonContainer>
				<Title>{name}</Title>
				<p>Count: x{count}</p>
				<p>Width: {size.width}m</p>
				<p>Height: {size.height}m</p>
				<p>Weight: {weight}</p>
			</Right>
		</Container>
	)
}

export default ProductItem
