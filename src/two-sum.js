var twoSum = function(nums, target) {
    const arr = []
    for(let i = 0 ;i < nums.length-1; i++){
        for(j =i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                arr.push(i,j)
            }
        }
    }
    return arr
};






