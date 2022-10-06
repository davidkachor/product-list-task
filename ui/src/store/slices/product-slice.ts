import { createSlice } from '@reduxjs/toolkit'
import { MOCHA_DATA } from '../../MOCHA_DATA'
import { Product } from '../../types'

const productSlice = createSlice({
	initialState: MOCHA_DATA as Product[],
	name: 'products',
	reducers: {},
})

export default productSlice.reducer
