let nums = [3, 2, 2, 3];
let val = 3;

let k = 0;
let arr = [];
// var removeElement = function (nums, val) {
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      k += 1;
      arr.push(nums[i]);
    }
  }
  return k + arr;
}
