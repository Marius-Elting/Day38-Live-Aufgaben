let leeresObject = {};

let laptop1 = {
    //Key       Wert
    hersteller: "apple",
    model: "macbook air m1",
    jahr: "2020",
    ausstattung: ["16GB RAM", "8 Core CPU", "512GB SSD"],
    description() {
        console.log("Hersteller ist " + this.hersteller + " model ist " + this.model);
    },
    specs: function () {
        console.log(this.ausstattung);
    },
    // nicht so Sinnvoll in Objekten: 
    test: () => {
        // hier kann man nicht auf das this. Keyword zugreifen!!!
        laptop.jahr;
    }

};

let laptop2 = {
    hersteller: "hp",
    model: "omen 17",
    jahr: "2020",
    ausstattung: ["16GB RAM", "Nvidia 2070", "512GB SSD"]
};

console.log(laptop1.hersteller);
console.log(laptop2.hersteller);


// function constructor
// Bauplan
// ALle Objekte haben am Ende eine vordefinierte Struktur z.B. hersteller, model, jahr


// Syntax ist identisch zu normalen Funktionen
function Laptop(hersteller, model, jahr, ausstattung) {
    this.hersteller = hersteller;
    this.model = model;
    this.jahr = jahr;
    this.ausstattung = ausstattung;
}

const latop = new Laptop("apple", "Macbook Air M1", "2020", ["16GB RAM", "8 Core CPU", "512GB SSD"]);

const laptopInstace2 = new Laptop("Lenovo", 'IdeaPad 13', "2021", ["4GB RAM", "Intel UHD Graphics Xe G4", "256GM SSD"]);

// function handy(produktNamen, produktPreis, produktJahr, produktMaterial) {
//     this.produktNamen = produktNamen;
//     this.produktPreis = produktPreis;
//     this.ProduktJahr = produktJahr;
//     this.produktMaterial = produktMaterial;
// }
// let myPhone = new handy("OnePlus 8pro", "900€", "2020", ["Glas", "Aluminium"]);

// console.log(myPhone);

class handy {
    constructor(produktNamen, produktPreis, produktJahr, produktMaterial) {
        this.produktNamen = produktNamen;
        this.produktPreis = produktPreis;
        this.produktJahr = produktJahr;
        this.produktMaterial = produktMaterial;
        // this.description = function () {
        //     console.log(this.produktNamen);

        // };
    }
    description() {
        console.log(this.produktNamen);
    }
}

let myPhone = new handy("OnePlus 8pro", "900€", "2020", ["Glas", "Aluminium"]);

myPhone.description();


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }
    calcSurface() {
        return this.width * this.height;
    }
}
// cube vererbt von Rectangle 
class Cube extends Rectangle {
    constructor(width, height, depth) {
        super(width, height);
        this.depth = depth;
    }
    calcSurface() {
        super.calcSurface() * this.depth;
    }
}


let newCube = new Cube(10, 10, 10);

console.log(newCube.calcSurface())


