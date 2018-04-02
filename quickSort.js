//CODE
var quickSort = (nums) => {
	if(nums.length <= 1) return nums;

	var pivot = nums[nums.length - 1];
	var left = [];
	var right = [];
	for(i=0;i<nums.length-1;i++){
		if(nums[i] < pivot){
			left.push(nums[i]);
		}else{
			right.push(nums[i]);
		}
	}

	var sortedLeft = quickSort(left);
	var sortedRight = quickSort(right);
	return sortedLeft.concat(pivot).concat(sortedRight);
	//return [...quickSort(sortedLeft),pivot,...quickSort(sortedRight)];
}

//EXECUTION
quickSort([10,8,2,1,6,3,9,4,7,5])
