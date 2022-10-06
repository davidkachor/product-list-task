import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const ProductList = React.lazy(() => import('../pages/ProductList'))
const ProductInfo = React.lazy(() => import('../pages/ProductInfo'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

const MainRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/adverts" />} />
				<Route path="/adverts" element={<ProductList />} />
				<Route path="/adverts/:id" element={<ProductInfo />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default MainRoutes
