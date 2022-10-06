import React from 'react'
import { createPortal } from 'react-dom'

import { ButtonStyled } from './styled'

const AddButton: React.FC = () => {
	const clickHandler = () => {
		console.log('click')
	}

	return createPortal(
		<ButtonStyled onClick={clickHandler}>+</ButtonStyled>,
		document.getElementById('btn-root') as HTMLElement
	)
}

export default AddButton
