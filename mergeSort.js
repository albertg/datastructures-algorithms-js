//CODE
var mergeSort = (nums) => {
	if(nums.length < 2){
		return nums;
	}
	var length = nums.length;
	var middle = Math.floor(length/2);
	var left = nums.slice(0,middle);
	var right = nums.slice(middle, length);

	var sortedLeft = mergeSort(left);
	var sortedRight = mergeSort(right);

	return stitch(sortedLeft, sortedRight);
}

var stitch = (left, right) => {
	var results = [];
	while(left.length && right.length){
		if(left[0] <= right[0]){
			results.push(left.shift());
		}else{
			results.push(right.shift());
		}
	}
	//If either of the arrays still has some elements that have not been 'shifted' or popped
	while(left.length){
    	results.push(left.shift());
	}
	while(right.length){
    	results.push(right.shift());
	}

	return results;
}

//EXECUTION
mergeSort([2,6,1,0,8]);
