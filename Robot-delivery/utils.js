import { roadGraph } from "./app.js";
import { VillageState } from "./village.js";


function runRobot(state, robot, memory){
    for(let i = 0;; i++) { // creates an infinity loops
        if(state.parcels === 0) { // stopping condition
            console.log(`Done in ${i} turns.`) // how long it takes in turns
            break; // exit mechanism 
        }
        let action = robot(state, memory); // robots current state and memory are stored
        state = state.move(action.direction); // uses villageState method to update
        memory = action.memory; // gets robots memory after updating
        console.log(`Moved to ${action.direction}`); // prints out move
    }
};


function randomPick(arr) {
    return Math.floor(Math.random() * arr.length);  // random ele in an array
}

function randomRobot(state) {
    return {
        direction: randomPick(roadGraph[state.place]) // an object with a random direction to move towards
    }
}


export {randomPick, randomRobot, runRobot};

runRobot(VillageState.random(), randomRobot);