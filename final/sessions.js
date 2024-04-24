const uuid = require('uuid').v4

const sessions = {}

function addSession(username) {
	const sid = uuid()
	sessions[sid] = {
		username,
	}
	return sid
}

function getSessionUser(sid) {
	console.log(sessions)
	return sessions[sid]?.username
}

function getSessionUsername(username) {
	const uuids = Object.keys(sessions)
	const uuid = uuids.find(key => sessions[key].username === username)
	return uuid
}

function deleteSession(sid) {
	delete sessions[sid]
}

module.exports = {
	addSession,
	deleteSession,
	getSessionUser,
	getSessionUsername,
}
