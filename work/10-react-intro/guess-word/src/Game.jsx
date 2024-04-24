import { useState } from 'react';
import commonLetters from './words';

function Game({username, onLogout}) {
    const [inputValue, setInputValue] = useState('');
    const [words, setWords] = useState('');

function checkWord(inputword) {
      const word = inputword.toUpperCase();
      if (word.length !== 5) {
        return `'${word}' was not a valid word`;
      } else if (word === 'REACT') {
        return `'${word}' is the secret word!`;
      } else {
        const lettersInCommon = commonLetters(word); 
        return `'${word}' had ${lettersInCommon} letters in common`;
      }
    }
    
return (
      <div className="game-page">
        <h1> Hello {username}, let's guess word</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            setWords(checkWord(inputValue))
            setInputValue('')
        }}>
            <input
                value={inputValue}
                onInput={(e) => setInputValue(e.target.value)}
                placeholder="Your Guessing"
            />
            <button>Guess</button>
            <button className="logout" onClick={onLogout}>Logout</button>
        </form>
        <div className="word-result">{words}</div>
      </div>
    );
  }

export default Game;