import Comment from './comment'

type Product = {
	id: string
	imageUrl: string
	name: string
	count: number
	size: {
		width: number
		height: number
	}
	weight: string
	comments: Comment[]
}

export default Product
