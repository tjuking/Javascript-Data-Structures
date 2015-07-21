//冒泡排序
function bubbleSort(data){
    var len = data.length;
    var temp;
    for(var outer=len; outer>=2; outer--){
        for(var inner=0; inner<=outer-1; inner++){
            if(data[inner] > data[inner+1]){
                temp = data[inner];
                data[inner] = data[inner+1];
                data[inner+1] = temp;
            }
        }
    }
}