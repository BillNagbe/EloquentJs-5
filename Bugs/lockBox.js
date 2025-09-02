const box = new class {
    locked = true;
    #content = [];

    unlock() {this.locked = false};
    lock() {this.locked = true};
}


function withBoxUnlocked(body) {
    try {
        box.unlock();
        body();
    }
    catch(e) {
        console.log(e);
    }
    finally {
        box.lock();
    }
}


try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);