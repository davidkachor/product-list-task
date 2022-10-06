import React, { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'

import {
	Layout,
	Container,
	Header,
	Title,
	CloseButton,
	Footer,
	ControlBtn,
} from './styled'
import cross from '../../../assets/icons/cross.svg'
import { BUTTON_GREEN_COLOR, BUTTON_RED_COLOR } from '../../../variable'

export type ModalProps = {
	children: ReactNode
	onModalClose?: () => void
	title?: string
	hasCloseBtn?: boolean
	confirmText?: string
	cancelText?: string
	onConfirm?: () => void
}

const Modal: React.FC<ModalProps> = ({
	children,
	onModalClose,
	title,
	hasCloseBtn,
	cancelText,
	confirmText,
	onConfirm,
}) => {
	const layoutRef = useRef(null)

	const closeHandler: React.EventHandler<any> = event => {
		if (!layoutRef.current || event.target !== layoutRef.current) return
		onModalClose?.()
	}

	return createPortal(
		<Layout ref={layoutRef} onClick={closeHandler}>
			<Container>
				{(!!title || hasCloseBtn) && (
					<Header>
						<Title>{title || ''}</Title>
						{hasCloseBtn && (
							<CloseButton bgColor={BUTTON_RED_COLOR} onClick={onModalClose}>
								<img src={cross} alt="close" width="20" height="20" />
							</CloseButton>
						)}
					</Header>
				)}
				{children}
				{!!onConfirm && (
					<Footer>
						<ControlBtn bgColor={BUTTON_GREEN_COLOR} type="submit" onClick={onConfirm}>
							{confirmText || 'Confirm'}
						</ControlBtn>
						<ControlBtn bgColor={BUTTON_RED_COLOR} onClick={onModalClose}>
							{cancelText || 'Cancel'}
						</ControlBtn>
					</Footer>
				)}
			</Container>
		</Layout>,
		document.getElementById('modal-root') as HTMLElement
	)
}

export default Modal
