var removeElement = function(nums, val) {
    for(let i=0 ; i < nums.length ; i++){
        if(nums[i] === val){
            const cut = nums.splice(i,1)
            i--
        }
    }
    return nums
};


