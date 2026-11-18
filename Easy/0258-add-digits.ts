// 258. Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

function addDigits(num: number): number {

     while (num >= 10) {
        num = String(num).split("").map(Number).reduce((t, c) => t + c, 0);
    }
    return num;
};