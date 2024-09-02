function twoSums(nums, target) {
    var numMap = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
}
var nums = [2, 11, 7, 9, 3];
var target = 5;
console.log(twoSums(nums, target)); // [0, 1]
