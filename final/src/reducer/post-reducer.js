export const PostReducerConstant = {
	CREATE_POST: 'createPost',
	DELETE_POST: 'deletePost',
	UPDATE_POST: 'updatePost',
	GET_POST: 'getPost',
}

const reducer = (state, action) => {
	switch (action.type) {
		case PostReducerConstant.GET_POST:
			return action.payload

		case PostReducerConstant.CREATE_POST:
			return [action.payload, ...state]
		case PostReducerConstant.DELETE_POST:
			return state.filter((item) => item.postId !== action.payload.postId)
		case PostReducerConstant.UPDATE_POST:
			const postId = action.payload.postId
			const updateField = action.payload.updateField
			return state.map((item) => {
				if (item.postId === postId) {
					return { ...item, ...updateField }
				}
				return item
			})
		default:
			return state
	}
}

export default reducer
