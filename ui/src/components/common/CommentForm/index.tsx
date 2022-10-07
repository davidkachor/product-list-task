import React, { useState } from 'react'
import { useAppDispatch } from '@/hooks'
import { addComment } from '@/store/slices/product-slice'

import { v4 } from 'uuid'
import Button from '@/components/common/Button'
import { Form, Input } from './styled'

const CommentForm: React.FC<{ id: string }> = ({ id }) => {
	const dispatch = useAppDispatch()
	const [description, setDescription] = useState('')

	const submitHandler: React.FormEventHandler = event => {
		event.preventDefault()
		if (!description) return
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
		setDescription('')
	}

	return (
		<Form onSubmit={submitHandler}>
			<Input value={description} onChange={event => setDescription(event.target.value)} />
			<Button>Add new comment</Button>
		</Form>
	)
}

export default CommentForm
