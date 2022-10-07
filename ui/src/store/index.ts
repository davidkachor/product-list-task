import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './slices'

const store = configureStore({
	reducer: { products: productReducer },
})

store.subscribe(() => {
	localStorage.setItem('PRODUCT_STORE', JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
