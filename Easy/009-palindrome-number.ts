
// Palindrome Number 

function isPalindrome(x: number): boolean {
    if(Math.abs(x).toString().split("").reverse().join("") === x.toString()) {
        return true
    }
    return false
};
