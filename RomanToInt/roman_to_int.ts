function romanToInt(s: string): number {
    const romanMap: { [key: string]: number} = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    s.split('').forEach((char, index) => {
        const current = romanMap[char];
        const next = romanMap[s[index + 1]];
        console.log('current', current);
        console.log('next', next);
        console.log('result', result);

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    });

    return result;
}

const s = 'IX';
console.log(romanToInt(s)); // 9