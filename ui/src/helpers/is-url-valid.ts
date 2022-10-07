const isUrlValid = (url: string) => {
	return Boolean(url.match(
        new RegExp(
            "^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$",
            'm'
        )
    ))
}

export default isUrlValid
