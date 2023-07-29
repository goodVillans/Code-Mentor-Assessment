const  dijkstra  = require('./Dijkstras');
const data = require('./data.json');



// Now you can use the 'graph' object in your tests:
test('Test case 1: Path from node 0 to node 3', () => {
   const result = dijkstra(data.graph, 0, 3);
   expect(result.distance).toBe(10);
   expect(result.path).toEqual([0, 4, 3]);
 });

test('Test case 2: Path from node 0 to node 4', () => {
const result = dijkstra(data.graph, 0, 4);
expect(result.distance).toBe(2);
expect(result.path).toEqual([0, 4]);
});

test('Test case 3: Path from node 1 to node 2', () => {
const result = dijkstra(data.graph, 1, 2);
expect(result.distance).toBe(10);
expect(result.path).toEqual([1, 0, 4, 2]);
});

test('Test case 4: Path from node 4 to node 1', () => {
const result = dijkstra(data.graph, 4, 1);
expect(result.distance).toBe(7);
expect(result.path).toEqual([4, 0, 1]);
});
