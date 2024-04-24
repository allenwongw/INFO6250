export default function commonLetters(word){
  word = word.toUpperCase();
  const secretWord = "REACT"
  let count = {};

  for (const letter of word){
      if(letter in count){
        count[letter] += 1;
      }else{
        count[letter] = 1;
      }
    }

    let sameWord = 0;
    for(const letter of secretWord){
      if(letter in count && count[letter]>0){
        sameWord +=1;
        count[letter] -=1;
      }
    }
    
  return sameWord;
}
