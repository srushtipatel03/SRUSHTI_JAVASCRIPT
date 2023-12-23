// --->  word length counter

function wordlength(word) { 

    let count=0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ' ') {
          count++;
        }
      }
      return count;
}

const word = prompt('Enter a word: ');

const result = wordlength(word);

console.log(result);


