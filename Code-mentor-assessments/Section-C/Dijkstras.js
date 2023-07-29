function findShortestDistance(distances, visited) {

   let smallest = null
   // Iterates over each node in the distances object
   for (let node in distances) {
      // if smallest is null and is not visited assign to smallest 
      if (smallest === null && !visited.includes(node)) {
         smallest = node
         // If the node hasn't been visited and its distance is less 
         // than the current smallest, update smallest
      } else if (!visited.includes(node) && distances[node] < distances[smallest]) {
         smallest = node
      }
      // Return the smallest node
      return smallest
   }
}


function dijkstra(graph, sourceNode, destinationNode) {
   let distances = {};
   let previous = {};
   let visited = [];
 
   // Initialize the distances and previous
   for (let node of graph.nodes) {
     distances[node.id] = Infinity;
     previous[node.id] = null;
   }
 
   // The distance from the source to itself is zero
   distances[sourceNode] = 0;
 
   // While there are unvisited nodes
   while (visited.length !== graph.nodes.length) {
     // Find the node with the smallest distance
     let currentNode = Object.keys(distances).reduce((closest, node) => {
       if ((closest === null || distances[node] < distances[closest]) && !visited.includes(parseInt(node))) {
         return node;
       } else {
         return closest;
       }
     }, null);
 
     if (currentNode === null) break;
 
     // Include the current node to the visited nodes
     visited.push(parseInt(currentNode));
 
     // For each neighbor of the current node
     let neighbors = graph.edges.filter(edge => edge.source === parseInt(currentNode) || edge.target === parseInt(currentNode));
     for (let neighbor of neighbors) {
       let neighborNode = neighbor.source === parseInt(currentNode) ? neighbor.target : neighbor.source;
       let distance = distances[currentNode] + neighbor.metadata.distance;
 
       // If the calculated distance is less than the current distance, update
       if (distance < distances[neighborNode]) {
         distances[neighborNode] = distance;
         previous[neighborNode] = parseInt(currentNode);
       }
     }
   }
 
   // Create the shortest path array
   let shortestPath = [destinationNode];
   let previousNode = previous[destinationNode];
 
   while (previousNode !== null) {
     shortestPath.push(previousNode);
     previousNode = previous[previousNode];
   }
 
   // Return the reversed shortest path
   return {
      distance: distances[destinationNode],
      path: shortestPath.reverse(),
   };
 }

module.exports = dijkstra