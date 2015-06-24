function Node(element){
    this.element = element;
    this.previous = null;//双向
    this.next = null;
}

function LinkedList(){
    this.head = new Node("head");
    this.head.next = this.head;//循环链表
    this.size = 1;
}

LinkedList.prototype = {

    constructor: LinkedList,



    find: function(element){
        var curNode = this.head;
        while(curNode.element != element){
            curNode = curNode.next;
        }
        return curNode;
    },

    insert: function(newElement, element){
        var newNode = new Node(newElement);
        var curNode = this.find(element);
        newNode.next = curNode.next;
        newNode.previous = curNode;//双向
        curNode.next = newNode;
    },

    //单向链表有用
    //findPrevious: function(element){
    //    var curNode = this.head;
    //    while(curNode.next != null && curNode.next.element != element){
    //        curNode = curNode.next;
    //    }
    //    return curNode;
    //},

    remove: function(element){
        var curNode = this.find(element);
        if(curNode.next != null){
            curNode.previous.next = curNode.next;
            curNode.next.previous = curNode.previous;
            curNode.next = null;
            curNode.previous = null;
        }
        //单向链表
        //var prevNode = this.findPrevious(element);
        //if(prevNode.next != null){
        //    prevNode.next = prevNode.next.next;
        //}
    }

};