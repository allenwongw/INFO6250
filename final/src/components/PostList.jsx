import { useState } from 'react'
import { useEffect } from 'react'
import PostCard from './PostCard'

function PostList({
	userInfo,
	postInfo,
	dispatchPostInfo,
	dispatchPostFormInfo,
	setErrorMessage,
}) {
	const [isLogin, setIsLogin] = useState(false)

	useEffect(() => {
		setIsLogin(!!userInfo?.userId)
	}, [userInfo])
	const requestLoginView = () => (
		<div className='post-list'>
			<p className='post-warning warning'>Please Sign Up first, then Log In</p>
		</div>
	)

	const postView = () => (
		<div className='post-list'>
			<ul className='post-ul'>
				{postInfo.map((postInfoItem) => (
					<PostCard
						userInfo={userInfo}
						postInfoItem={postInfoItem}
						dispatchPostInfo={dispatchPostInfo}
						dispatchPostFormInfo={dispatchPostFormInfo}
						setErrorMessage={setErrorMessage}
						key={postInfoItem.id}
					/>
				))}
			</ul>
		</div>
	)

	return isLogin ? postView() : requestLoginView()
}

export default PostList
