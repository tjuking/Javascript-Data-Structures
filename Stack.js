function Stack(){
    this.data = [];
    this.top = 0;
}

Stack.prototype = {
    constructor: Stack,
    push: function(element){
        this.data[this.top++] = element;
    },
    pop: function(){
        return this.data[--this.top];
    },
    peek: function(){
        return this.data[this.top-1];
    },
    length: function(){
        return this.top;
    },
    clear: function(){
        this.data = [];
        this.top = 0;
    }
};