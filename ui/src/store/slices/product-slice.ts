import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MOCHA_DATA } from '../../MOCHA_DATA'
import { Product } from '../../types'

const productSlice = createSlice({
	initialState: MOCHA_DATA as Product[],
	name: 'products',
	reducers: {
		remove(state, action: PayloadAction<string>) {
			const id = action.payload
			return state.filter(e => e.id !== id)
		},
	},
})

export const { remove } = productSlice.actions

export default productSlice.reducer
