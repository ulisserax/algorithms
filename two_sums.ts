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

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSums(nums, target)); // [0, 1]