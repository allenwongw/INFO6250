import { useEffect, useReducer, useState } from 'react'

import { fetchPost } from './apis/post'
import { apiFetchSession } from './apis/user'
import Error from './components/Error'
import Footer from './components/Footer'
import Header from './components/Header'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import User from './components/User'
import { PostFormConstant } from './reducer/post-form-reducer'
import postFormReducer from './reducer/post-form-reducer'
import { PostReducerConstant } from './reducer/post-reducer'
import postReducer from './reducer/post-reducer'

import './App.css'

function App() {
	const [userInfo, setUserinfo] = useState({})
	const [postInfo, dispatchPostInfo] = useReducer(postReducer, [])
	const [postFormInfo, dispatchPostFormInfo] = useReducer(postFormReducer, {
		state: PostFormConstant.CREATE,
		formInfo: {
			title: '',
			content: '',
			cover: '',
		},
	})
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		const intervalId = setInterval(() => {
			fetchPost().then((res) => {
				const action = {
					type: PostReducerConstant.GET_POST,
					payload: res,
				}
				dispatchPostInfo(action)
			})
		}, 5000)
		return () => {
			clearInterval(intervalId)
		}
	}, [])

	useEffect(() => {
		apiFetchSession().then((res) => {
			setUserinfo(res)
			console.log(res)
		})
	}, [])

	useEffect(() => {
		dispatchPostFormInfo({
			type: PostFormConstant.CLEAR,
		})
		fetchPost().then((res) => {
			const action = {
				type: PostReducerConstant.GET_POST,
				payload: res,
			}
			dispatchPostInfo(action)
		})
	}, [userInfo])

	return (
		<div className='app'>
			<Header />
			<Error errorMessage={errorMessage} />
			<div>
				<PostList
					userInfo={userInfo}
					postInfo={postInfo}
					dispatchPostInfo={dispatchPostInfo}
					dispatchPostFormInfo={dispatchPostFormInfo}
					setErrorMessage={setErrorMessage}
				/>
				{userInfo?.userId && (
					<PostForm
						postFormInfo={postFormInfo}
						dispatchPostFormInfo={dispatchPostFormInfo}
						dispatchPostInfo={dispatchPostInfo}
						setErrorMessage={setErrorMessage}
						userInfo={userInfo}
					/>
				)}
				<User
					userInfo={userInfo}
					setUserinfo={setUserinfo}
					setErrorMessage={setErrorMessage}
				/>
			</div>
			<Footer />
		</div>
	)
}

export default App
