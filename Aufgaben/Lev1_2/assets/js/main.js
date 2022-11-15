class Person {
    constructor(namen, alter) {
        this.namen = namen;
        this.alter = alter;
    }

    info() {
        return `${this.namen} is ${this.alter} years old.`;
    }
};

const info = new Person("Marius", 21);

console.log(info.info());
