import { Product } from './types'

export const MOCHA_DATA: Product[] = [
	{
		id: '1',
		imageUrl:
			'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
		count: 2,
		comments: [
			{
				id: '0',
				productId: '1',
				date: new Date().toString(),
				description: 'Cool, i like it!',
			},
			{
				id: '1',
				productId: '1',
				date: new Date().toString(),
				description: 'Cool, i like it!',
			},
			{
				id: '2',
				productId: '1',
				date: new Date().toString(),
				description: 'Cool, i like it!',
			},
		],
		name: 'Hello World',
		size: {
			height: 20,
			width: 40,
		},
		weight: '120kg',
	},
	{
		id: '2',
		imageUrl:
			'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
		count: 2,
		comments: [],
		name: 'Hello World',
		size: {
			height: 20,
			width: 40,
		},
		weight: '120kg',
	},
	{
		id: '3',
		imageUrl:
			'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
		count: 2,
		comments: [],
		name: 'Hello World',
		size: {
			height: 20,
			width: 40,
		},
		weight: '120kg',
	},
	{
		id: '4',
		imageUrl:
			'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
		count: 2,
		comments: [],
		name: 'Hello World',
		size: {
			height: 20,
			width: 40,
		},
		weight: '120kg',
	},
	{
		id: '5',
		imageUrl:
			'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
		count: 2,
		comments: [],
		name: 'Hello World',
		size: {
			height: 20,
			width: 40,
		},
		weight: '120kg',
	},
	{
		id: '6',
		imageUrl:
			'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
		count: 2,
		comments: [],
		name: 'Hello World',
		size: {
			height: 20,
			width: 40,
		},
		weight: '120kg',
	},
]
