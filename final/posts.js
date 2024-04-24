const uuid = require('uuid').v4

function makePostList() {

	const postList = {}
	const posts = {
	}

	postList.contains = function contains(id) {
		return !!posts[id]
	}

	postList.getPosts = function getPosts() {
		const postsArray = Object.values(posts)
		return postsArray
	}

	postList.addPost = function addPost(task) {
		const id = uuid()
		posts[id] = {
			id,
			title: task.title,
			content: task.content,
			cover: task.cover,
			likeCount: task.likeCount || 0,
			postUserId: task.postUserId || 0,
		}
		return id
	}

	postList.getPost = function getPost(id) {
		return posts[id]
	}

	postList.updatePost = function updatePost(id, post) {
		posts[id].title = post.title ?? posts[id].title
		posts[id].content = post.content || posts[id].content
		posts[id].cover = post.cover || posts[id].cover
		posts[id].likeCount = post.likeCount || posts[id].likeCount
		posts[id].postUserId = post.postUserId || posts[id].postUserId
	}

	postList.patchPost = function patchPost(id, likeCount) {
		posts[id].likeCount = likeCount || posts[id].likeCount
	}

	postList.deletePost = function deletePost(id) {
		delete posts[id]
	}

	return postList
}

module.exports = {
	makePostList,
}
