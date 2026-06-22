/*

Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

*/

// Solution 1

// function arrayDiff(a, b) {
//     let ultimateArr = []
//     a.filter((item) => {
//         let found = false
//         for (let i = 0; i < b.length; i++) {
//             if (item === b[i]) {
//                 found = true
//                 break
//             }
//         }
//         if(!found) {
//             ultimateArr.push(item)
//         }
//     })

//     return ultimateArr
// }

// arrayDiff([1, 2, 2, 2, 3], [2, 5, 5, 6, 5, 1])



// Solution 2
function arrayDiff(a, b) {
    let ultimateArr = []
    for (let i = 0; i < a.length; i++) {
        if(!b.includes(a[i])) {
            ultimateArr.push(a[i])
        }
    }
    return ultimateArr
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2, 5, 5, 6, 5, 1]))


function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2, 5, 5, 6, 5, 1]))