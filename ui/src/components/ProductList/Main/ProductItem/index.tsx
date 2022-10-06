import React, { useState } from 'react'
import { useAppDispatch } from '../../../../hooks'
import { remove } from '../../../../store/slices/product-slice'
import { Product } from '../../../../types'
import Modal from '../../../common/Modal'

import { Item, Image, Title, Remove, TitleButtonContainer } from './styled'

const ProductItem: React.FC<Product> = ({ name, id, imageUrl }) => {
	const dispatch = useAppDispatch()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const removeHandler = () => {
		dispatch(remove(id))
		setIsModalOpen(false)
	}

	return (
		<>
			<Item>
				<Image src={imageUrl} />
				<TitleButtonContainer>
					<Title>{name + ' ' + id}</Title>
					<Remove onClick={() => setIsModalOpen(true)}>Remove</Remove>
				</TitleButtonContainer>
			</Item>
			{isModalOpen && (
				<Modal
					isForm={true}
					confirmText="Yes"
					cancelText="No"
					onConfirm={removeHandler}
					onModalClose={() => setIsModalOpen(false)}
				>
					<h2>Are you sure you want to remove this item "{name}"?</h2>
				</Modal>
			)}
		</>
	)
}

export default ProductItem
