//选择排序
function selectionSort(data){
    var len = data.length;
    var min;
    var temp;
    for(var i=0; i<=len-2; i++){
        min = i;
        for(var j=i+1; j<=len-1; j++){
            if(data[j] < data[min]){
                temp = data[min];
                data[min] = data[j];
                data[j] = temp;
            }
        }
    }
}