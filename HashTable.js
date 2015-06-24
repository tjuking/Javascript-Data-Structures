function HashTable(){
    this.table = new Array(137);
}

HashTable.prototype = {

    constructor: HashTable,

    simpleHash: function(str){
        var total = 0;
        for(var i=0; i<str.length; i++){
            total += str.charCodeAt(i);
        }
        return total % this.table.length;
    },

    betterHash: function(str){
        var H = 37;
        var total = 0;
        for(var i=0; i<str.length; i++){
            total = H*total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if(total < 0){
            total += this.table.length - 1;
        }
        return parseInt(total);
    },

    getRandomInt: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    put: function(data){
        var position = this.betterHash(data);
        this.table[position] = data;
    },

    get: function(data){
      return this.table[this.betterHash(data)];
    },

    //可以利用开链法或线性探测法来解决碰撞问题
    buildChains: function(){
        for(var i=0; i<this.table.length; i++){
            this.table[i] = new Array();
        }
    }
};