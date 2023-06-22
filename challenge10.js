Question : /* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.
*/

"use strict";

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

[a, b, ...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]


Solution : 

"use strict";

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

var [a,b,...c] =arr;
// Write code here

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
