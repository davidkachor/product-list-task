import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './slices'

export default configureStore({
	reducer: { products: productReducer },
})
