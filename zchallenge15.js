Question :

/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// Write code here

console.log(vowelsCount);
// 8

Solution: 



"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";
var arr =[...str];

arr.forEach(a => {if(vowels.includes(a)){
    vowelsCount++;}
})

// Write code here

console.log(vowelsCount);
// 8
