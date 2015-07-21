//希尔排序
function shellSort(data){
    var gap = [5, 3, 1];
    for(var g=0; g<gap.length; g++){
        for(var i=gap[g]; i<data.length; i++){
            var temp = data[i];
            for(var j=i; j>=gap[g] && data[j-gap[g]]>temp; j-=gap[g]){
                data[j] = data[j-gap[g]];
            }
            data[j] = temp;
        }
    }
}