function List(){
    this.size = 0;
    this.position = 0;
    this.data = [];
}

List.prototype = {
    constructor: List,
    clear: function(){
        this.data = [];
        this.size = 0;
        this.position = 0;
    },
    find: function(element){
        return this.data.indexOf(element);
    },
    insert: function(element, afterElement){
        var insertPosition = this.find(afterElement);
        if(insertPosition >= 0){
            this.data.splice(insertPosition+1, 0, element);
            ++this.size;
            return true;
        }
        return false;
    },
    remove: function(element){
        var removePosition = this.find(element);
        if(removePosition >= 0){
            this.data.splice(removePosition, 1);
            --this.size;
            return true;
        }
        return false;
    },
    append: function(element){
        this.data[this.size++] = element;
    },
    length: function(){
        return this.size;
    },
    front: function(){
        this.position = 0;
    },
    end: function(){
        this.position = this.size - 1;
    },
    prev: function(){
        if(this.position > 0){
            --this.position;
        }
    },
    next: function(){
        if(this.position < this.size - 1){
            ++this.position;
        }
    },
    currentPosition: function(){
        return this.position;
    },
    moveTo: function(position){
        this.position = position;
    },
    currentElement: function(){
        return this.data[this.position];
    }
};