import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
	gap: 10px;
`
const Container = styled.div`
	padding: 20px;
	border-radius: 10px;
	background-color: #cecece;
`
const ToMain = styled(Link)`
	font-size: 20px;
`

const NotFound: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<h1>404 Not Found</h1>
			</Container>
			<ToMain to="/">Back to main page</ToMain>
		</Wrapper>
	)
}

export default NotFound
