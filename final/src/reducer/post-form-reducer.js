export const PostFormConstant = {
	CREATE: 'create',
	UPDATE: 'update',
	CHANGE: 'change',
	CLEAR: 'clear',
}

const reducer = (state, action) => {
	const payload = action.payload
	switch (action.type) {
		case PostFormConstant.CREATE:
			return {
				state: PostFormConstant.CREATE,
				formInfo: {
					title: '',
					content: '',
					cover: '',
					likeCount: 0,
					postUserId: '',
				},
			}
		case PostFormConstant.UPDATE:
			return {
				state: PostFormConstant.UPDATE,
				formInfo: {
					...payload,
				},
			}
		case PostFormConstant.CHANGE:
			return {
				state: state.state,
				formInfo: {
					...state.formInfo,
					...payload,
				},
			}
		case PostFormConstant.CLEAR:
			return {
				state: PostFormConstant.CREATE,
				formInfo: {
					title: '',
					content: '',
					cover: '',
					likeCount: 0,
					postUserId: '',
				},
			}
		default:
			return state
	}
}

export default reducer
