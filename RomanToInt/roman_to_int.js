function romanToInt(s) {
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var result = 0;
    s.split('').forEach(function (char, index) {
        var current = romanMap[char];
        var next = romanMap[s[index + 1]];
        console.log('current', current);
        console.log('next', next);
        console.log('result', result);
        if (current < next) {
            console.log('current < next', current, next);
            console.log('result', result);
            result -= current;
            console.log('result', result);
        }
        else {
            result += current;
        }
    });
    return result;
}
var s = 'IX';
console.log(romanToInt(s)); // 4
