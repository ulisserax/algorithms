function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    return x === reverseNumber(x);
}
function reverseNumber(x) {
    var getReversed = parseFloat(x.toString().split('').reverse().join(''));
    if (x < 0) {
        return getReversed * -1;
    }
    return getReversed;
}
var x = 121;
console.log(isPalindrome(x)); // true
