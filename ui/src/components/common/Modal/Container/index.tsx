import React, { FormEventHandler } from 'react'

import { NormalContainer, FormContainer } from './styled'

const Container: React.FC<{
	isForm?: boolean
	children: React.ReactNode
	onSubmit?: () => void
}> = ({ isForm, children, onSubmit }) => {
	const submitHandler: FormEventHandler = event => {
		event.preventDefault()
		console.log('form')
		onSubmit?.()
	}

	return isForm ? (
		<FormContainer onSubmit={submitHandler}>{children}</FormContainer>
	) : (
		<NormalContainer>{children}</NormalContainer>
	)
}

export default Container
