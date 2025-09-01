function buildGraph(edges) {
    let graph = Object.create(null); // {}
    // helper function
    function addEdge(from , to) { // from is a 'key' in the graph object
        if(from in graph) {
            graph[from].push(to); //from 'key' should be an array
        }
        else {
            graph[from] = [to]; // sets the to(destination) equal to from(coming)
        }
    }

    for(let [from, to] of edges.map(r => r.split('-'))) { // grabs points on the graph and splits them with -
        addEdge(from, to);  // used to create the environoment 
        addEdge(to, from);
    }

    return graph; // returns the enironment(graph)
}


export {buildGraph};