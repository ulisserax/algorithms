function twoSums(nums: number[], target: number): number[] {
    const numMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }

    return [];
}

const nums = [2, 11, 7, 9, 3];
const target = 5;

console.log(twoSums(nums, target)); // [0, 1]