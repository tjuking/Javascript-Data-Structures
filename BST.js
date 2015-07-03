function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
}

//二叉查找树
function BST(){
    this.root = null;
}

BST.prototype = {

    constructor: BST,

    insert: function(data){
        var n = new Node(data, null, null);
        if(this.root == null){
            this.root = n;
        }else{
            var current = this.root;
            var parent;
            while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    },

    //中序遍历
    inOrder: function(node){
        if(node != null){
            this.inOrder(node.left);
            this.showNode(node);
            this.inOrder(node.right);
        }
    },

    //先序遍历
    preOrder: function(node){
        if(node != null){
            this.showNode(node);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },

    //后序遍历
    postOrder: function(node){
        if(node != null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.showNode(node);
        }
    },

    showNode: function(node){
        console.log(node.data);
    },

    getMin: function(){
        var current = this.root;
        while(current.left != null){
            current = current.left;
        }
        return current.data;
    },

    getMax: function(){
        var current = this.root;
        while(current.right != null){
            current = current.right;
        }
        return current.data;
    },

    find: function(data){
        var current = this.root;
        while(current != null){
            if(current.data == data){
                return current;
            }else if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return null;
    }

    /*remove: function(data){
        return this.removeNode(this.root, data);
    },

    removeNode: function(node, data){
        if(node == null){
            return null;
        }
        if(data == node.data){
            if(node.left == null && node.right == null){
                return null;
            }
            if(node.left == null){
                return node.right;
            }
            if(node.right == null){
                return node.left;
            }
            //?
            var tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;

        }else if(data < node.data){
            node.left = this.removeNode(node.left, data);
            return node;
        }else{
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }*/
};