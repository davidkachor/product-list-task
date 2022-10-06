import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { ButtonStyled } from './styled'
import Modal from '../../common/Modal'
import { BUTTON_GREEN_COLOR } from '../../../variable'
import AddForm from './AddForm'

export type FormInputData = {
	name?: string
	count?: number
	width?: number
	height?: number
	weight?: string
	imageUrl?: string
}

const AddButton: React.FC = () => {
	const [modalOpened, setModalOpened] = useState(false)
	const [formData, setFormData] = useState<FormInputData>({})
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		setIsFormValid(
			Boolean(
				formData.name &&
					formData.count &&
					formData.height &&
					formData.width &&
					formData.imageUrl &&
					formData.weight
			)
		)
	}, [formData])

	const clickHandler = () => {
		setModalOpened(prev => !prev)
	}
	const closeHandler = () => {
		setModalOpened(false)
	}
	const setInputsHandler = (updates: FormInputData) => {
		setFormData(prev => ({ ...prev, ...updates }))
	}
	const confirmHandler = () => {
		console.log(formData)
	}

	return (
		<>
			{createPortal(
				<ButtonStyled onClick={clickHandler} bgColor={BUTTON_GREEN_COLOR}>
					+
				</ButtonStyled>,
				document.getElementById('btn-root') as HTMLElement
			)}
			{modalOpened && (
				<Modal
					title="Create new product"
					hasCloseBtn={true}
					onModalClose={closeHandler}
					onConfirm={confirmHandler}
					isForm={true}
					isSubmittable={isFormValid}
				>
					<AddForm setInputs={setInputsHandler} />
				</Modal>
			)}
		</>
	)
}

export default AddButton
