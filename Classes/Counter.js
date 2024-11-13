class Counter {
    constructor(value = 0) {
        this.value = value;
    }

    initialize(value) {
        this.value = value;
    }

    increment() {
        this.value += 1;
    }

    go() {
        let numArr = []
        for (let i = 0; i <= this.value; i++) {
            numArr.push(i)
        }
        return numArr
    }
}