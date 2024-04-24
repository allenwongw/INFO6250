export const fetchPost = () => {
	return fetch('/api/v2/posts')
		.catch((error) => Promise.reject(error))
		.then((response) => {
			if (!response.ok) {
				return response.json().then((error) => Promise.reject(error))
			}
			return response.json()
		})
}

export const apiUpdatePost = (postId, updateField) => {
	const queryBody = { postId, ...updateField }
	return fetch('/api/v2/posts/' + postId, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(queryBody),
	})
		.catch((error) => Promise.reject(error))
		.then((response) => {
			if (!response.ok) {
				return response.json().then((error) => {
					return Promise.reject(error)
				})
			}
			return response.json()
		})
}

export const apiPatchPost = (postId, updateField) => {
	const queryBody = { postId, ...updateField }
	return fetch('/api/v2/posts/' + postId, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(queryBody),
	})
		.catch((error) => Promise.reject(error))
		.then((response) => {
			if (!response.ok) {
				return response.json().then((error) => {
					return Promise.reject(error)
				})
			}
			return response.json()
		})
}

export const apiDeletePost = (postId) => {
	const queryBody = { postId }
	return fetch('/api/v2/posts/' + postId, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(queryBody),
	})
		.catch((error) => {
			return Promise.reject(error)
		})
		.then((response) => {
			if (!response.ok) {
				return response.json().then((error) => {
					return Promise.reject(error)
				})
			}
			return response.json()
		})
}

export const apiCreatePost = (body) => {
	return fetch('/api/v2/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.catch((error) => Promise.reject(error))
		.then((response) => {
			if (!response.ok) {
				return response.json().then((error) => {
					return Promise.reject(error)
				})
			}
			return response.json()
		})
}
