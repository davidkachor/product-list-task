import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const MainRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>PRODUCT LIST PAGE</h1>} />
				<Route path="/:id" element={<h1>PRODUCT PAGE</h1>} />
				<Route path="*" element={<h1>404 not found</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default MainRoutes
