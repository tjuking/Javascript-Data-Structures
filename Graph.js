function Graph(v){
    this.vertices = new Array(v);
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    //this.edgeTo = [];
    for(var i=0; i<this.vertices.length; i++){
        this.adj[i] = [];
        this.marked[i] = false;
    }
}

Graph.prototype = {

    constructor: Graph,

    addEdge: function(v, w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    },

    //深度优先遍历
    dfs: function(v){
        this.marked[v] = true;
        console.log("Visited: " + v);
        for(var i=0; i<this.adj[v].length; i++){
            if(!this.marked[this.adj[v][i]]){
                this.dfs(this.adj[v][i]);
            }
        }
    },

    //广度优先遍历
    bfs: function(s){
        var queue = [];
        this.marked[s] = true;
        queue.push(s);
        while(queue.length > 0){
            var v = queue.shift();
            console.log("Visited:" + v);
            for(var i=0; i<this.adj[v].length; i++){
                if(!this.marked[this.adj[v][i]]){
                    //this.edgeTo[this.adj[v][i]] = v;
                    this.marked[this.adj[v][i]] = true;
                    queue.push(this.adj[v][i]);
                }
            }
        }
    },

    show: function(){
        for(var i=0; i<this.vertices.length; i++){
            var path = i + " -> ";
            for(var j=0; j<this.adj[i].length; j++){
                if(this.adj[i][j] != undefined){
                    path += this.adj[i][j] + " ";
                }
            }
            console.log(path);
        }
    }
};