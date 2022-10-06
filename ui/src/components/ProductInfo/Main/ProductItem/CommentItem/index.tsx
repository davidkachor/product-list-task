import React from 'react'
import { Comment } from '../../../../../types'

import { Wrapper, Date, Description } from './styled'

const CommentItem: React.FC<Comment> = ({ date, description }) => {
	return (
		<Wrapper>
			<Description>{description}</Description>
			<Date>{date}</Date>
		</Wrapper>
	)
}

export default CommentItem
