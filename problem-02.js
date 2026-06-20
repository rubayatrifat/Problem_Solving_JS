/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

// ============== 1st Slution
// function longest(s1, s2) {
//     mergedStr = s1 + s2
//     removingRepeted = [... new Set(mergedStr)]
//     ultimateStr = removingRepeted.sort().join("")
//     return ultimateStr
// }


// ============== 2nd Slution
// longest("jakheuinom", "qewmalkbj")
// function longest(s1, s2) {
//     let mergedStr = s1 + s2
//     let mergedArr = mergedStr.split("")
//     let ultimateStr = mergedArr.filter((item, index) => {
//         return mergedArr.indexOf(item) === index
//     })
//     return ultimateStr.sort().join("")
// }

// console.log(longest("jakheuinom", "qewmalkbj"))

// ============== 3rd Slution
function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function (element, index, array) {
        return element !== array[index - 1];
    });
    return s4.join("");
}


console.log((longest("aabadc","malnlbak")))