/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.; 

*/


function humanReadable(seconds) {
    let SS = seconds
    let HH, MM
    if (seconds > 359999) {
        return "The Number is too big to calculate"
    } else {
        MM = Math.trunc(SS / 60)
        SS = SS - (MM * 60)
        HH = Math.trunc(MM / 60)
        MM = MM - (HH * 60)
    }

    return `${HH.toString().padStart(2, '0')}:${MM.toString().padStart(2, '0')}:${SS.toString().padStart(2, '0')}`;
}


console.log(humanReadable(0))