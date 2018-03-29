//CODE
var insertionSort = function(nums){
	for(i=1;i<nums.length;i++){
		for(j=0;j<i;j++){
			if(nums[i] < nums[j]){
				//Take out i from nums array
				var spliced = nums.splice(i,1);
				//Insert i at the jth position
				nums.splice(j, 0, spliced[0]);
			}
		}
	}
	console.log(nums);
};

//EXECUTION
insertionSort([4,3,0])
