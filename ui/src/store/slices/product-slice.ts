import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MOCHA_DATA } from '../../MOCHA_DATA'
import { Comment, Product } from '../../types'

const productSlice = createSlice({
	initialState: MOCHA_DATA as Product[],
	name: 'products',
	reducers: {
		remove(state, action: PayloadAction<string>) {
			const id = action.payload
			return state.filter(e => e.id !== id)
		},
		add(state, action: PayloadAction<Product>) {
			return [action.payload, ...state]
		},
		addComment(
			state,
			action: PayloadAction<{ productId: string; comment: Comment }>
		) {
			const { productId, comment } = action.payload
			const item = state.find(e => e.id === productId)
			if (!item) return state
			item.comments.unshift(comment)
		},
	},
})

export const { remove, add, addComment } = productSlice.actions

export default productSlice.reducer
