 class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    minus(vec) {
        let x = (this.x - vec.x);
        let y = (this.y - vec.y);
        return new Vec(x, y);
    }

    plus(vec) {
         let x = (this.x + vec.x);
        let y = (this.y + vec.y);
        return new Vec(x, y);
    }

    get length() {
        let x = Math.pow(this.x, 2);
        let y = Math.pow(this.y, 2);
        let fin = Math.sqrt(x + y);
        return fin;
    }


 }


 console.log(new Vec(1, 2).plus(new Vec(2, 3)));
 console.log(new Vec(1, 2).minus(new Vec(2, 3)));
 console.log(new Vec(3, 4).length);