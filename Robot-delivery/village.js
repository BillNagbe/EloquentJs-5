import { roadGraph } from "./app.js";
import { randomPick } from "./utils.js";

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(dest){
        if(!roadGraph[this.place].includes(dest)) return this; // not a valid destination in our graph
        else {
            let parcels = this.parcels.map(p => { // performs a transformation
                if(p.place != this.place) return p; // if parcel and the current node do not have the same place value returns the place
                return {place: dest, address: p.address} // returns an array of objects that were transformed 
            }).filter(p => p.place != p.address); // filters any objects that the place and address do not match
            return new VillageState(dest, parcels) // updates the villages state 'moves the robot'
        }
    }
};

VillageState.random = (parcelCount = 5) => {
    let parcels = [];
    for(let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph))
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while(place === address)
            parcels.push({place, address});
    }

    return new VillageState("Post Office", parcels);
}


export {VillageState};