"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY
 
    word = word.toLowerCase();
    guess = guess.toLowerCase();
    let count = {};

    for (const letter of word){
      if(letter in count){
        count[letter] += 1;
      }else{
        count[letter] = 1;
      }
    }

    let commonCount = 0;
    for(const letter of guess){
      if(letter in count && count[letter]>0){
        commonCount +=1;
        count[letter] -=1;
      }
    }
    
  return commonCount;
}

