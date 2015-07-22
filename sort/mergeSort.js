function mergeSort(data){
    if(data.length < 2){
        return;
    }
    var step = 1;
    var left;
    var right;
    while(step < data.length){
        left = 0;
        right = step;
        while(right + step <= data.length){
            mergeArray(data, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
        if(right < data.length){
            mergeArray(data, left, left+step, right, data.length);
        }
        step *= 2;
    }
}

function mergeArray(arr, startLeft, stopLeft, startRight, stopRight){
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    var k = startRight;
    for(var i=0; i<(rightArr.length-1); i++){
        rightArr[i] = arr[k];
        k++;
    }
    k = startLeft;
    for(var i=0; i<(leftArr.length-1); i++){
        leftArr[i] = arr[k];
        k++;
    }
    //哨兵值，用于后面的比较，灵巧
    rightArr[rightArr.length-1] = Infinity;
    leftArr[leftArr.length-1] = Infinity;
    var m = 0;
    var n = 0;
    for(var k=startLeft; k<stopRight; k++){
        if(leftArr[m] <= rightArr[n]){
            arr[k] = leftArr[m];
            m++
        }else{
            arr[k] = rightArr[n];
            n++;
        }
    }
}