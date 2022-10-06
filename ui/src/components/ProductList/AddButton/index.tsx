import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import Modal from '../../common/Modal'
import AddForm from './AddForm'
import { ButtonStyled } from './styled'
import { BUTTON_GREEN_COLOR } from '../../../variable'
import { useAppDispatch } from '../../../hooks'
import { add } from '../../../store/slices/product-slice'
import { isFormDataValid, compileFormData } from '../../../helpers'

export type FormInputData = {
	name?: string
	count?: number
	width?: number
	height?: number
	weight?: string
	imageUrl?: string
}

const AddButton: React.FC = () => {
	const dispatch = useAppDispatch()
	const [modalOpened, setModalOpened] = useState(false)
	const [formData, setFormData] = useState<FormInputData>({})
	const [isFormValid, setIsFormValid] = useState(isFormDataValid(formData))

	useEffect(() => {
		setIsFormValid(isFormDataValid(formData))
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
		closeHandler()
		dispatch(add(compileFormData(formData)))
		setFormData({})
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
