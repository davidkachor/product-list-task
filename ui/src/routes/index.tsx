import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const ProductList = React.lazy(() => import('@/pages/ProductList'))
const ProductInfo = React.lazy(() => import('@/pages/ProductInfo'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))

const MainRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/products" />} />
				<Route
					path="/products"
					element={
						<React.Suspense>
							<ProductList />
						</React.Suspense>
					}
				/>
				<Route
					path="/products/:id"
					element={
						<React.Suspense>
							<ProductInfo />
						</React.Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<React.Suspense>
							<NotFound />
						</React.Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default MainRoutes
