function moveZeros (nums){

    let returnArr = [];
    let i = 0;
    let zeroCounter = 0;

//zeroCounter keeps track of the difference between it and i
//First loop removes zeros, Second loop adds them at the end

    while (i < nums.length){

        if (nums[i] != 0){
            returnArr[zeroCounter] = nums[i];
            zeroCounter++;
            i++;
        } else{
            i++;
        }  
    }

    while(zeroCounter<i){
        returnArr[zeroCounter] = 0;
        zeroCounter++;
    }
    return returnArr;
}

arr = [0, 1, 0, 3, 12];
console.log(arr);
console.log(moveZeros(arr));