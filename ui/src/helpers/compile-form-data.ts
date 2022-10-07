import { Product, FormInputData } from '../types'
import { v4 } from 'uuid'

const compileFormData: (data: FormInputData) => Product = ({
	name = '',
	weight = '',
	height = 0,
	count = 0,
	width = 0,
	imageUrl = '',
}) => {
	return {
		id: v4(),
		name,
		weight,
		size: {
			width,
			height,
		},
		count,
		imageUrl,
		comments: [],
	}
}

export default compileFormData
