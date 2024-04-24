const ErrorConstant = {
	'auth-error': 'Your username/password combination does not match any records, please try again',
	'permission-denied': "Please enter a valid (letters and/or numbers) username",
	'user-exist': 'The username is already been used',
	'account-suspended': 'Your account is banned.',
}

const ErrorMessage = ({ errorMessage }) => {
	return (
		<div className={`error-message ${errorMessage ? 'warning' : ''}`}>
			<p>{ErrorConstant[errorMessage] || errorMessage}</p>
		</div>
	)
}

export default ErrorMessage
