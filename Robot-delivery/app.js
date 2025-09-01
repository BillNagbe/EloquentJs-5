import { roads } from "./roads.js";
import { buildGraph } from "./graph.js";


const roadGraph = buildGraph(roads); // an empty object that holds a group of arrays

console.log(roadGraph);


export {roadGraph};