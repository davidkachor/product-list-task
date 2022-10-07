import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { editProduct } from '../../../store/slices/product-slice'
import { isFormDataValid } from '../../../helpers'
import { Product, FormInputData } from '../../../types'
import Button from '../Button'
import Modal from '../Modal'
import ProductForm from '../ProductForm'

const EditButton: React.FC<{ productId: string }> = ({ productId }) => {
	const dispatch = useAppDispatch()
	const {
		name,
		weight,
		count,
		imageUrl,
		size: { height, width },
	} = useAppSelector(
		state => state.products.find(e => e.id === productId) || ({} as Product)
	)
	const [formData, setFormData] = useState<FormInputData>({
		name,
		weight,
		count,
		imageUrl,
		height,
		width,
	})
	const [isFormOpen, setIsFormOpen] = useState(false)
	const [isFormValid, setIsFormValid] = useState(isFormDataValid(formData))

	useEffect(() => {
		if (!isFormOpen)
			setFormData({
				name,
				weight,
				count,
				imageUrl,
				height,
				width,
			})
	}, [isFormOpen])

	useEffect(() => {
		setIsFormValid(isFormDataValid(formData))
	}, [formData])

	const setInputsHandler = (updates: FormInputData) => {
		setFormData(prev => ({ ...prev, ...updates }))
	}

	const confirmHandler = () => {
		dispatch(editProduct({ productId, updates: formData }))
		setIsFormOpen(false)
	}

	return (
		<>
			<Button onClick={() => setIsFormOpen(true)}>Edit</Button>
			{isFormOpen && (
				<Modal
					isForm={true}
					onModalClose={() => setIsFormOpen(false)}
					isSubmittable={isFormValid}
					onConfirm={confirmHandler}
					title={`Edit product "${name}"`}
					hasCloseBtn={true}
				>
					<ProductForm setInputs={setInputsHandler} inputsState={formData} />
				</Modal>
			)}
		</>
	)
}

export default EditButton
