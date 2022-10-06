import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import { ButtonStyled } from './styled'
import Modal from '../../common/Modal'
import { BUTTON_GREEN_COLOR } from '../../../variable'

const AddButton: React.FC = () => {
	const [modalOpened, setModalOpened] = useState(false)
	const clickHandler = () => {
		setModalOpened(prev => !prev)
	}
	const closeHandler = () => {
		setModalOpened(false)
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
					onConfirm={() => console.log('confirmed')}
					isForm={true}
				>
					hello
				</Modal>
			)}
		</>
	)
}

export default AddButton
