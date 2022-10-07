import React from 'react'
import { useAppSelector } from '@/hooks'

import { ListWrapper, MainStyled, Message } from './styled'

import ProductItem from './ProductItem'

const Main: React.FC = () => {
	const items = useAppSelector(state => state.products)

	return (
		<MainStyled>
			<ListWrapper>
				{items.length === 0 ? (
					<li>
						<Message>
							You did`t add any product. Click + button to add one
						</Message>
					</li>
				) : (
					items.map(e => <ProductItem key={e.id} {...e} />)
				)}
			</ListWrapper>
		</MainStyled>
	)
}

export default Main
