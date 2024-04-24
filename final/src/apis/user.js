export const apiFetchSession = () => {
	return fetch('/api/v2/session')
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

export const apiUserLogin = (body) => {
	return fetch('/api/v2/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
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

export const apiUserRegister = (body) => {
	return fetch('/api/v2/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
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


export const userLogout = () => {
	return fetch('/api/v2/session', {
		method: 'DELETE',
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
