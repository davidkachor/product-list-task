import React, {useState} from 'react'
import Button from '../Button'

import { Form, Input } from './styled'
import {useAppDispatch} from "../../../hooks";

const CommentForm: React.FC<{ id: string }> = ({ id }) => {
	const dispatch = useAppDispatch
	const [value, setValue] = useState('')

	return (
		<Form>
			<Input onChange={event => setValue(event.target.value)} />
			<Button>Add new comment</Button>
		</Form>
	)
}

export default CommentForm
