/*

yrics...
Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem: imagine that you have a pyramid built of numbers, like the ones here:

    3                10
   7 4             10  20
  2 4 6          10  10  20
 8 5 9 3       10  90  10  20
Here comes the task...
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the largest 'slide downs' are 3 + 7 + 4 + 9 = 23, and 10 + 20 + 10 + 90 = 130.

Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

With the input [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]], your function should return 23.
With the input [[10], [10, 20], [10, 10, 20], [10, 90, 10, 20]], your function should return 130.
By the way...
Tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

(c) This task is a lyrical version of Problem 18 and/or Problem 67 on ProjectEuler.

*/



/// ========= GREADY Method

// function longestSlideDown(pyramid) {
//     let resultSum = pyramid[0][0]
//     let currentIndex = 0
//     for (let i = 1; i < pyramid.length; i++) {
//         if (pyramid[i][currentIndex] > pyramid[i][currentIndex + 1]) {
//             resultSum += pyramid[i][currentIndex]
//         } else {
//             resultSum += pyramid[i][currentIndex + 1]
//             currentIndex++
//         }
//     }
//     return resultSum;
// }


// console.log(longestSlideDown([
//     [3],
//     [7, 4],
//     [2, 4, 6],
//     [8, 5, 9, 3]]
// ))



/// ========== DP Method

function longestSlideDown(pyramid) {
    let resultSum = 0
    let arrayNum = 0

    for (let i = pyramid.length - 1; i >= 0; i--) {

        for (let j = 0; j < pyramid[i].length; j++) {
            if (pyramid[i][j] > pyramid[i][j + 1] && arrayNum < pyramid[i - 1][j] + pyramid[i][j]) {
                arrayNum = pyramid[i - 1][j] + pyramid[i][j]

            } else if (pyramid[i][j] < pyramid[i][j + 1] && arrayNum < pyramid[i - 1][j] + pyramid[i][j + 1]) {
                arrayNum = pyramid[i - 1][j] + pyramid[i][j + 1]
            }
        }

        resultSum += arrayNum
        arrayNum = 0
    }
    return resultSum
}


console.log(longestSlideDown([
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]]
))



// 
