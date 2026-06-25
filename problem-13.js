/*

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

// [1] - 1
// [1, 2] - 2 + 1
// [1, 2, 3] - 3 + 2 + 1
// [1, 2, 3, 4] - 4 + 3 + 2 + 1
// [1, 2, 3, 4, 5] - 5 + 4 + 3 + 2 + 1
// [1, 2, 3, 4, 5, 6] - 6 + 5 + 4 + 3 + 2 + 1


function sum(arr) {
    let maxSum = 0
    let currentSum = 0
    for(let item of arr) {
        currentSum += item
        if (currentSum < 0) {
            currentSum = 0
        }
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }
    return maxSum
}

console.log(sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))