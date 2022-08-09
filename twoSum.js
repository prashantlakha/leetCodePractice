//this has Complexity of n^2 which is not acceptable
// var twoSum = function(nums, target) {
//     let ans=[];
//     for(let i=0;i<nums.length-1;i++){
//       for(let j=i+1;nums.length;i++){
//           if(nums[i]+nums[j]==target){
//               ans[0]=i;
//               ans[1]=j
//               return ans
//           }
//       }
//     }
//     return ans;
// };

var twoSum = function (nums, target) {
  const comp = new Map();
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
  return [];
};
const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));

console.log("Running the code");
