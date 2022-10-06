import React, { useState } from 'react'
import Button from '../Button'
import { v4 } from 'uuid'

import { Form, Input } from './styled'
import { useAppDispatch } from '../../../hooks'
import { addComment } from '../../../store/slices/product-slice'

const CommentForm: React.FC<{ id: string }> = ({ id }) => {
	const dispatch = useAppDispatch()
	const [description, setDescription] = useState('')

	const submitHandler: React.FormEventHandler = event => {
		event.preventDefault()
		dispatch(
			addComment({
				productId: id,
				comment: {
					productId: id,
					description,
					date: new Date().toString(),
					id: v4(),
				},
			})
		)
	}

	return (
		<Form onSubmit={submitHandler}>
			<Input onChange={event => setDescription(event.target.value)} />
			<Button>Add new comment</Button>
		</Form>
	)
}

export default CommentForm
