import { useState } from 'react';


function Login({onLogin}) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  function isValid(username) {
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  return isValid
  }
  
  function submitLogin(){
  if(username === 'dog'){
    setError('Dog is not a valid user');
    return
  } 
  if (!isValid(username)){
    setError('kindly use letters and numbers');
    return 
  }
  onLogin(username)
  }

  return (
    <div className="login-page">
    <form>
      <label>
        <span>Username: </span>
        <input
          value={username}
          placeholder="Your Name Please"
          onInput={(e) => setUsername(e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => submitLogin()}
      >
        Log~In
      </button>
    </form>
    <div className="name-error">{error}</div>
     </div>
  );
}

export default Login;