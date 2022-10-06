import React, { FormEventHandler } from 'react'

import { NormalContainer, FormContainer } from './styled'

const Container: React.FC<{
	isForm?: boolean
	children: React.ReactNode
	onSubmit?: () => void
	isSubmittable?: boolean
}> = ({ isForm, children, onSubmit, isSubmittable }) => {
	const submitHandler: FormEventHandler = event => {
		event.preventDefault()
		if (!isSubmittable) return
		onSubmit?.()
	}

	return isForm ? (
		<FormContainer onSubmit={submitHandler}>{children}</FormContainer>
	) : (
		<NormalContainer>{children}</NormalContainer>
	)
}

export default Container
