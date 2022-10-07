import React, { EventHandler, useId, useState } from 'react'

import {
	FormController,
	Container,
	Input,
	SizeWrapper,
	InputWrapper,
	Select,
	Check,
	Image,
} from './styled'
import { isUrlValid } from '../../../helpers'
import { FormInputData } from '../../../types'

const ProductForm: React.FC<{
	setInputs: (updates: FormInputData) => void
	inputsState: FormInputData
}> = ({ setInputs, inputsState }) => {
	const id = useId()
	const [imgURL, setImgURL] = useState(inputsState?.imageUrl || '')
	const [showImg, setShowImg] = useState(false)
	const [weight, setWeight] = useState({
		value:
			inputsState?.weight?.replaceAll(new RegExp('(kg|g|t)', 'gm'), '') || '',
		type: inputsState?.weight?.match(new RegExp('(kg|g|t)', 'gm'))?.[0] || 'kg',
	})

	const showImgHandler: EventHandler<any> = () => {
		if (!isUrlValid(imgURL)) return
		setShowImg(true)
		setInputs({ imageUrl: imgURL })
	}

	return (
		<Container>
			<FormController>
				<label htmlFor={`name-${id}`}>Name</label>
				<Input
					type="text"
					id={`name-${id}`}
					value={inputsState?.name || ''}
					placeholder="Write the name of your product"
					onChange={event => setInputs({ name: event.target.value })}
				/>
			</FormController>
			<FormController>
				<label htmlFor={`count-${id}`}>Count</label>
				<Input
					type="number"
					step="1"
					min="1"
					id={`count-${id}`}
					value={inputsState?.count || ''}
					onChange={event => setInputs({ count: event.target.valueAsNumber })}
					placeholder="How much do you have?"
				/>
			</FormController>
			<FormController>
				<label htmlFor={`weight-${id}`}>Weight</label>
				<InputWrapper>
					<Input
						type="number"
						step="0.1"
						min="0.1"
						id={`weight-${id}`}
						value={weight.value || ''}
						onChange={event => {
							setWeight(prev => ({ ...prev, value: event.target.value }))
							setInputs({ weight: event.target.value + weight.type })
						}}
						placeholder="What is the weight of the product?"
					/>
					<Select
						value={weight.type}
						onChange={event => {
							setWeight(prev => ({ ...prev, type: event.target.value }))
							setInputs({ weight: weight.value + event.target.value })
						}}
					>
						<option value={'g'}>g</option>
						<option value={'kg'}>kg</option>
						<option value={'t'}>t</option>
					</Select>
				</InputWrapper>
			</FormController>
			<SizeWrapper>
				<FormController>
					<label htmlFor={`width-${id}`}>Width (m)</label>
					<Input
						type="number"
						step="0.1"
						min="0.1"
						id={`width-${id}`}
						value={inputsState?.width || ''}
						onChange={event => setInputs({ width: event.target.valueAsNumber })}
						placeholder="Product width"
					/>
				</FormController>
				<FormController>
					<label htmlFor={`height-${id}`}>Height (m)</label>
					<Input
						type="number"
						step="0.1"
						min="0.1"
						id={`height-${id}`}
						value={inputsState?.height || ''}
						onChange={event =>
							setInputs({ height: event.target.valueAsNumber })
						}
						placeholder="Product height"
					/>
				</FormController>
			</SizeWrapper>
			<FormController>
				<label htmlFor={`image-${id}`}>URL of the image</label>
				<Input
					type="text"
					id={`image-${id}`}
					placeholder="Write the URL of the image here"
					value={imgURL}
					onChange={event => {
						if (showImg) setShowImg(false)
						setImgURL(event.target.value)
					}}
				/>
				{showImg ? (
					<Image src={imgURL} />
				) : (
					<Check onClick={showImgHandler}>Confirm image</Check>
				)}
			</FormController>
		</Container>
	)
}

export default ProductForm
