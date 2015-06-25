function Set(){
    this.data = [];
}

Set.prototype = {
    constructor: Set,

    add: function(data){
        if(this.data.indexOf(data) == -1){
            this.data.push(data);
            return true;
        }else{
            return false;
        }
    },

    remove: function(data){
        var position = this.data.indexOf(data);
        if(position >= 0){
            this.data.splice(position, 1);
            return true;
        }else{
            return false;
        }
    },

    contains: function(data){
        return this.data.indexOf(data) >= 0;
    },

    union: function(set){
        var tempSet = new Set();
        for(var i=0; i<this.data.length; i++){
            tempSet.add(this.data[i]);
        }
        for(var i=0; i<set.data.length; i++){
            if(!tempSet.contains(set.data[i])){
                tempSet.data.push(set.data[i]);
            }
        }
        return tempSet;
    },

    intersect: function(set){
        var tempSet = new Set();
        for(var i=0; i<this.data.length; i++){
            if(set.contains(this.data[i])){
                tempSet.data.push(this.data[i]);
            }
        }
        return tempSet;
    },

    //判断子集
    subset: function(set){
        if(this.data.length > set.data.length){
            return false;
        }else{
            for(var i=0; i<this.data.length; i++){
                if(!set.contains(this.data[i])){
                    return false;
                }
            }
            return true;
        }
    },

    size: function(){
        return this.data.length;
    }
};