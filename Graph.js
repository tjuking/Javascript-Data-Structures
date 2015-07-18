function Graph(v){
    this.vertices = new Array(v);
    this.vertexList = [];//需要赋值
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = new Array(v);
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
                    this.edgeTo[this.adj[v][i]] = v;
                    this.marked[this.adj[v][i]] = true;
                    queue.push(this.adj[v][i]);
                }
            }
        }
    },

    //路径
    pathTo: function(s, v){
        var s = s || 0;
        this.bfs(s);
        if(!this.hasPathTo(v)){
            return undefined;
        }
        var path = [];
        for(var i=v; i!=s; i=this.edgeTo[i]){
            path.push(i);
        }
        path.push(s);
        console.log("Path:" + path.reverse().join("->"));
        return path;
    },

    hasPathTo: function(v){
        return this.marked[v];
    },

    //拓扑排序算法与深度优先搜索算法类似
    //不同的是，拓扑排序算法不会立即输出已访问的顶点，而是访问当前顶点邻接表中的所有相邻顶点，直到这个列表穷尽时，才将当前顶点压入栈中
    topSort: function(){
        var stack = [];
        var visited = [];
        for(var i=0; i<this.vertices.length; i++){
            visited[i] = false;
        }
        for(var i=0; i<this.vertices.length; i++){
            if(visited[i] === false){
                this.topSortHelper(i, visited, stack);
            }
        }
        for(var i=stack.length-1; i>=0; i--){
            console.log(this.vertexList[stack[i]]);
        }
    },

    topSortHelper: function(v, visited, stack){
        visited[v] = true;
        for(var i=0; i<this.adj[v].length; i++){
            if(!visited[this.adj[v][i]]){
                this.topSortHelper(this.adj[v][i], visited, stack);
            }
        }
        stack.push(v);
    },

    showGraph: function(){
        var visited = [];
        for(var i=0; i<this.vertices.length; i++){
            var resultStr = this.vertexList[i] + " -> ";
            visited.push(this.vertexList[i]);
            for(var j=0; j<this.vertices.length; j++){
                if(this.adj[i][j] != undefined){
                    if(visited.indexOf(this.vertexList[j]) < 0){
                        resultStr += this.vertexList[j] + " ";
                    }
                }
            }
            console.log(resultStr);
            visited.pop();
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