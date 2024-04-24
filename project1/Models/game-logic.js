const words = require('../words');
const users = {}; 

function registerUser(username) {
    if (!users[username]) {
        const answer = selectRandomWord();
        users[username] = {
            guessedWords: [],
            possibleWords: selectPossibleWords(answer), 
            answer: answer,
            attempts: 0,
            lastValidGuess: '',
            lastGuessMatch: 0,
            isWon: false,
        };
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function selectPossibleWords(answer) {
    const selectedWords = new Set();
    selectedWords.add(answer);
    while (selectedWords.size < 10) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];
        if (!selectedWords.has(word)) {
            selectedWords.add(word);
        }
    }
    return Array.from(selectedWords);

}

function selectRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function guessWord(username, guess) {
    const user = users[username];
    if (!words.includes(guess.toLowerCase())) {
        return { error: 'Invalid guess, This word is not in our list.', isValid: false };
    }
    const isDuplicate = user.guessedWords.some(gw => gw.guess.toLowerCase() === guess.toLowerCase());
    if (isDuplicate) {
        return { error: 'You have already guessed this word.', isDuplicate: true };
    }
    const isCorrect = guess.toLowerCase() === user.answer.toLowerCase();
    const matchCount = getMatchCount(guess, user.answer);

    user.guessedWords.push({ guess, matchCount });
    user.lastValidGuess = guess;
    user.lastGuessMatch = matchCount;
    user.attempts++;

    if (isCorrect) {
        user.isWon = true;
    }

    return { isCorrect, matchCount, attempts: user.attempts, isWon: user.isWon, isValid: true };
}

function getMatchCount(guess, answer) {
    let answerCount = {};
    let matchCount = 0;

    for (const letter of answer.toLowerCase()) {
        if (answerCount[letter]) {
            answerCount[letter]++;
        } else {
            answerCount[letter] = 1;
        }
    }

    for (const letter of guess.toLowerCase()) {
        if (answerCount[letter] && answerCount[letter] > 0) {
            matchCount++;
            answerCount[letter]--;
        }
    }

    return matchCount;
}

function resetGame(username) {
    const newAnswer = selectRandomWord(); 
    users[username] = {
        guessedWords: [],
        possibleWords: selectPossibleWords(newAnswer),
        answer: newAnswer,
        attempts: 0,
        lastValidGuess: '',
        lastGuessMatch: 0,
        isWon: false,
    };
}

module.exports = { registerUser, guessWord, resetGame, users, getMatchCount};
