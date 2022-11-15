class Person {
    constructor(namen, alter) {
        this.namen = namen;
        this.alter = alter;
        // document.write(namen + alter);
        return namen, alter;
    }

    info() {
        return `${this.namen} is ${this.alter} years old.`;
    }
};

const info = new Person("Marius", 21);

console.log(info.info());

let name = document.getElementById("name");
let age = document.getElementById("age");
let examCheck = document.getElementById("examCheck");
let button = document.getElementById("button");
let ul = document.getElementById("result");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    let newPerson = new Person(name.value, age.value);
    console.log(newPerson);
    li.textContent = newPerson.info();
    ul.appendChild(li);
    if (examCheck.checked) {
        li.style.color = "black";
    } else {
        li.style.color = "red";
    }
});