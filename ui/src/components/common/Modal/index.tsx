import React, { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'

import Container from './Container'

import cross from '@/assets/icons/cross.svg'
import {
	BUTTON_GREEN_COLOR,
	BUTTON_RED_COLOR,
} from '@/variable'
import {
	Layout,
	Header,
	Title,
	CloseButton,
	Footer,
	ControlBtn,
} from './styled'

export type ModalProps = {
	children: ReactNode
	onModalClose?: () => void
	title?: string
	hasCloseBtn?: boolean
	confirmText?: string
	cancelText?: string
	onConfirm?: () => void
	isForm?: boolean
	isSubmittable?: boolean
}

const Modal: React.FC<ModalProps> = ({
	children,
	onModalClose,
	title,
	hasCloseBtn,
	cancelText,
	confirmText,
	onConfirm,
	isForm,
	isSubmittable,
}) => {
	isSubmittable = isSubmittable === undefined ? true : isSubmittable
	const layoutRef = useRef(null)

	const closeHandler: React.EventHandler<any> = event => {
		if (!layoutRef.current || event.target !== layoutRef.current) return
		onModalClose?.()
	}

	return createPortal(
		<Layout ref={layoutRef} onClick={closeHandler}>
			<Container
				isForm={isForm}
				isSubmittable={isSubmittable}
				onSubmit={onConfirm}
			>
				{(!!title || hasCloseBtn) && (
					<Header>
						<Title>{title || ''}</Title>
						{hasCloseBtn && (
							<CloseButton
								bgColor={BUTTON_RED_COLOR}
								type="button"
								onClick={onModalClose}
							>
								<img src={cross} alt="close" width="20" height="20" />
							</CloseButton>
						)}
					</Header>
				)}
				{children}
				{!!onConfirm && (
					<Footer>
						<ControlBtn
							bgColor={BUTTON_GREEN_COLOR}
							disabled={!isSubmittable}
							onClick={onConfirm}
							type={isForm ? 'submit' : 'button'}
						>
							{confirmText || 'Confirm'}
						</ControlBtn>
						<ControlBtn
							bgColor={BUTTON_RED_COLOR}
							type="button"
							onClick={onModalClose}
						>
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
