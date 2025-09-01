class Group {
    constructor() {
        this.group = [];
        return this;
    }

    add(item) {
        !this.group.includes(item) ? this.group.push(item) : this.group;
    }

    delete(item) {
        for(let value of this.group) {
            if(value === item) {
                let remove = this.group.indexOf(value);
                this.group.splice(remove, 1);
            }
        }
    }

    has(item) {
        return this.group.includes(item);
    }

    static from(arr) {
        let group = new Group();
        for(let item of arr) {
           group.add(item);
        }
        return group
    }

}


let group = Group.from([10, 20]);
console.log(group)