const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 3000

const posts = require('./posts')
const sessions = require('./sessions')
const users = require('./users')

app.use(cookieParser())
app.use(express.static('./dist'))
app.use(express.json())

app.get('/api/v2/session', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''
	if (!sid || !users.isValid(username)) {
		res.status(401).json({ error: 'auth-missing' })
		return
	}
	res.json({ username, userId: sid })
})

app.post('/api/v2/login', (req, res) => {
	const { username } = req.body

	if (!users.isValid(username)) {
		res.status(400).json({ error: 'required-username' })
		return
	}

	if (username === 'dog') {
		res.status(403).json({ error: 'Username Bannering' })
		return
	}

	const existingUserData = users.getUserData(username)

	if (!existingUserData) {
		res.status(400).json({ error: 'username not found' })
		return
	}

	const sid = sessions.addSession(username)

	res.cookie('sid', sid)

	res.json({
		userId: sid,
		username,
	})
})

app.post('/api/v2/register', (req, res) => {
	const { username } = req.body

	if (!users.isValid(username)) {
		res.status(400).json({ error: 'required-username' })
		return
	}

	if (username === 'dog') {
		res.status(403).json({ error: 'Username Bannering' })
		return
	}

	const existingUserData = users.getUserData(username)

	if (!existingUserData) {
		users.addUserData(username, posts.makePostList())
		return res.json({
			data: 'ok',
		})
	}
	return res.status(400).json({ error: 'Username is already taken' })
})

app.delete('/api/v2/session', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''

	if (sid) {
		res.clearCookie('sid')
	}

	if (username) {
		sessions.deleteSession(sid)
	}
	res.json({ username })
})

app.get('/api/v2/posts', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''
	if (!sid || !users.isValid(username)) {
		res.status(401).json({ error: 'auth-missing' })
		return
	}
	res.json(users.getUserData(username).getPosts())
})

app.post('/api/v2/posts', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''
	if (!sid || !users.isValid(username)) {
		res.status(401).json({ error: 'auth-missing' })
		return
	}
	const { title } = req.body
	if (!title) {
		res.status(400).json({ error: 'required-title' })
		return
	}
	const postList = users.getUserData(username)
	const id = postList.addPost(req.body)
	res.json(postList.getPost(id))
})

app.get('/api/v2/posts/:id', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''
	if (!sid || !users.isValid(username)) {
		res.status(401).json({ error: 'auth-missing' })
		return
	}
	const postList = users.getUserData(username)
	const { id } = req.params
	if (!postList.contains(id)) {
		res.status(404).json({ error: `noSuchId`, message: `No post with id ${id}` })
		return
	}
	res.json(postList.getPost(id))
})

app.put('/api/v2/posts/:id', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''
	if (!sid || !users.isValid(username)) {
		res.status(401).json({ error: 'auth-missing' })
		return
	}
	const postList = users.getUserData(username)
	const { id } = req.params
	const { title, content, cover, likeCount } = req.body
	
	if (!title) {
		res.status(400).json({ error: 'required-title' })
		return
	}
	if (!postList.contains(id)) {
		res.status(404).json({ error: `noSuchId`, message: `No post with id ${id}` })
		return
	}
	postList.updatePost(id, { title, content, cover, likeCount })
	res.json(postList.getPost(id))
})

app.patch('/api/v2/posts/:id', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''
	if (!sid || !users.isValid(username)) {
		res.status(401).json({ error: 'auth-missing' })
		return
	}
	const { id } = req.params
	const { likeCount } = req.body
	const postList = users.getUserData(username)
	if (!postList.contains(id)) {
		res.status(404).json({ error: `noSuchId`, message: `No post with id ${id}` })
		return
	}
	postList.patchPost(id, likeCount)
	res.json(postList.getPost(id))
})

app.delete('/api/v2/posts/:id', (req, res) => {
	const sid = req.cookies.sid
	const username = sid ? sessions.getSessionUser(sid) : ''
	if (!sid || !users.isValid(username)) {
		res.status(401).json({ error: 'auth-missing' })
		return
	}
	const { id } = req.params
	const postList = users.getUserData(username)
	const exists = postList.contains(id)
	if (exists) {
		postList.deletePost(id)
	}
	res.json({ message: exists ? `post ${id} deleted` : `post ${id} did not exist` })
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
