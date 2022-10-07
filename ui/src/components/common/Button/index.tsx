import React, { ButtonHTMLAttributes } from 'react'

import { ButtonStyled } from './styled'

export type ButtonProps = {
	children: React.ReactNode,
	bgColor?: string
} & ButtonHTMLAttributes<any>

const Button: React.FC<ButtonProps> = props => {
	const { children, ...rest } = props
	return <ButtonStyled {...rest}>{children}</ButtonStyled>
}

export default Button
