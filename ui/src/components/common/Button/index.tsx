import React, { ButtonHTMLAttributes } from 'react'

import { ButtonStyled } from './styled'

export type ButtonProps = {
	children: React.ReactNode
} & ButtonHTMLAttributes<any>

const Button: React.FC<ButtonProps> = props => {
	const { children, ...attrs } = props
	return <ButtonStyled {...attrs}>{children}</ButtonStyled>
}

export default Button
