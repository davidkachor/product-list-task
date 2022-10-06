import { FormInputData } from '../components/ProductList/AddButton'

const isFormDataValid: (data: FormInputData) => boolean = formData => {
	return Boolean(
		formData.name &&
			formData.count &&
			formData.height &&
			formData.width &&
			formData.imageUrl &&
			formData.weight
	)
}

export default isFormDataValid
