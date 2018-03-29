//CODE
function bubbleSort(arr){  
  do{
    var swapped = false;
    for(i=0;i<arr.length;i++){
      if(arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  }while(swapped);
  console.log(arr);
}

//EXECUTION
bubbleSort([5,6,8,2,1,3])
