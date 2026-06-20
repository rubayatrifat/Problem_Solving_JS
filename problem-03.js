/*

Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/
// 1st Solution
// function solution(str) {
//     let mainStr;
//     let pairedArray = [];
//     str.length % 2 !== 0 ? mainStr = str + "_" : mainStr = str
//     for (let i = 0; i < mainStr.length; i += 2) {
//         pairedArray.push(mainStr.slice(i, i + 2))
//     }
//     return pairedArray
// }

// console.log((solution("akjlsna")))

// 2nd Solution
function solution(str) {
    let pairedArray = [];
    for(let i = 0; i < str.length; i += 2) {
        pairedArray.push(str[i] + (str[i + 1] || "_"))
    }
    return pairedArray
}

console.log((solution("akjlsna")))

