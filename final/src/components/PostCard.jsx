import { apiDeletePost, apiPatchPost } from '../apis/post'
import { PostFormConstant } from '../reducer/post-form-reducer'
import { PostReducerConstant } from '../reducer/post-reducer'

const PostCard = ({
	userInfo,
	postInfoItem,
	dispatchPostInfo,
	dispatchPostFormInfo,
}) => {
	const {
		id: postId,
		postUserId,
		title,
		content,
		cover,
		likeCount,
	} = postInfoItem
	const isPostEditable = postUserId === userInfo?.userId
	function onLikePost(e) {
		e.preventDefault()
		const body = { likeCount: likeCount + 1 }
		apiPatchPost(postId, body).then((res) => {
			const action = {
				type: PostReducerConstant.UPDATE_POST,
				payload: {
					postId,
					updateField: {
						likeCount: res.likeCount,
					},
				},
			}
			dispatchPostInfo(action)
		})
	}

	function onDeletePost(e) {
		apiDeletePost(postId).then((res) => {
			const action = {
				type: PostReducerConstant.DELETE_POST,
				payload: {
					postId: res.postId,
				},
			}
			dispatchPostInfo(action)
		})
	}

	function onEditPost(e) {
		const action = {
			type: PostFormConstant.UPDATE,
			payload: { postId, title, content, cover },
		}
		dispatchPostFormInfo(action)
	}

	return (
		<li className='post-list-item'>
			<div className='post-list-item-body'>
				<img className='post-image' src={cover} alt={''} />
				<h2 className='post-title'>{title}</h2>
				{/* <p className='post-author'>Creator: {postUserId}</p> */}
				<p className='post-content'>{content}</p>
				<div className='post-list-item-action'>
					<button className='like-button' onClick={onLikePost}>
						Like👍 {likeCount}
					</button>
					{isPostEditable && (
						<>
							<button className='delete-button' onClick={onDeletePost}>
								Delete
							</button>
							<button className='edit-button' onClick={onEditPost}>
								Edit
							</button>
						</>
					)}
				</div>
			</div>
		</li>
	)
}

export default PostCard
