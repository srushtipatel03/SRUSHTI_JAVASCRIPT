/*
    1. calculator
    2. digital clock / counter
    3. word length counter
    4. vowel character counter
    5. random string generator
    6. to-do list
    7. budget app 
*/

// ---> vowel character counter

function countVowel(str) { 

    let count=0;

    for (const char of str){
            if ( char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
            {
                 count++;
            }
        }
    return count;
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result); 



  