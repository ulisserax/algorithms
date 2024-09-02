function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  return x === reverseNumber(x);
}

function reverseNumber(x: number): number {

    let getReversed = parseFloat(x.toString().split('').reverse().join(''));
    if (x < 0) {
        return getReversed * -1;
    }
    return getReversed;
}

const x = 121;
console.log(isPalindrome(x)); // true