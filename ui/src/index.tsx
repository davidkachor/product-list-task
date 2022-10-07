import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import GlobalStyled from './global.styled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<GlobalStyled />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
