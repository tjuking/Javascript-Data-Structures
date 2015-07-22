function quickSort(data){
    if(data.length == 0){
        return [];
    }
    var left = [];
    var right = [];
    var pivot = data[0];
    for(var i=1; i<data.length; i++){
        if(data[i] < pivot){
            left.push(data[i]);
        }else{
            right.push(data[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}