const errorHandler: (error: unknown) => string = e => {
	if (e instanceof TypeError) {
		return e.message
	} else if (e instanceof RangeError) {
		return e.message
	} else if (e instanceof EvalError) {
		return e.message
	} else if (e instanceof Error) {
		return e.message
	} else if (typeof e === 'string') {
		return e
	} else {
		return JSON.stringify(e)
	}
}

export default errorHandler
