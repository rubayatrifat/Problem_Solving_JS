 /*

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/



function sumStrings(a, b) {

    const finalNum = a.padStart(b.length, '0')
    const finalNum2 = b.padStart(a.length, '0')

    let resultArr = []
    let carry = 0

    for (let i = finalNum.length - 1; i >= 0; i--) {
        let sumStr = (Number(finalNum[i]) + Number(finalNum2[i]) + carry).toString()
        if (i === 0) {
            resultArr.unshift(sumStr)
        } else if (sumStr.length < 2) {
            resultArr.unshift(sumStr)
            carry = 0
        } else {
            resultArr.unshift(sumStr[1])
            carry = Number(sumStr[0])
        }
    }
    return resultArr.join('').replace(/^0+/, '') || '0';
}

console.log(sumStrings('23546789', '42377378'))


// 23546789
// 42377378
// --------
// 65924167  
