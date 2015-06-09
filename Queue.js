function Queue(){
    this.data = [];
}

Queue.prototype = {
    constructor: Queue,
    enqueue: function(element){
        this.data.push(element);
    },
    dequeue: function(){
        return this.data.shift();
    },
    front: function(){
        return this.data[0];
    },
    end: function(){
        this.data[this.data.length-1];
    },
    length: function(){
      return this.data.length;
    },
    isEmpty: function(){
       return this.data.length == 0;
    }
};