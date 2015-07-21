//插入排序
function insertionSort(data){
    var temp;
    var inner;
    for(var outer=1; outer<data.length; outer++){
        temp = data[outer];
        inner = outer;
        while(inner>0 && data[inner-1]>=temp){
            data[inner] = data[inner-1];
            inner--;
        }
        data[inner] = temp;
    }
}