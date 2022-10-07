import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Comment, FormInputData, Product } from '../../types'

const productSlice = createSlice({
	initialState:
		(JSON.parse(localStorage.getItem('PRODUCT_STORE') || '')
			?.products as Product[]) || ([] as Product[]),
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
		editProduct(
			state,
			action: PayloadAction<{ productId: string; updates: FormInputData }>
		) {
			const { productId, updates } = action.payload
			const item = state.find(e => e.id === productId)
			if (!item) return
			item.name = updates.name || item.name
			item.count = updates.count || item.count
			item.weight = updates.weight || item.weight
			item.size = {
				width: updates.width || item.size.width,
				height: updates.height || item.size.height,
			}
			item.imageUrl = updates.imageUrl || item.imageUrl
		},
	},
})

export const { remove, add, addComment, editProduct } = productSlice.actions

export default productSlice.reducer
