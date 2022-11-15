({
    "plugins": ["jsdom-quokka-plugin"]
});

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let stageName = document.getElementById("stageName");
let albumCount = document.getElementById("albumCount");
let topSingles = document.getElementById("topSingles");
let worthCount = document.getElementById("worthCount");
let age = document.getElementById("age");
let quote = document.getElementById("quote");
let imgLink = document.getElementById("imgLink");
let button = document.getElementById("button");
let newRapper;

class Rapper {
    constructor(firstName, lastName, stageName, albumCount, hits, worthcount, age, quote, imgLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stageName = stageName;
        this.Albums = albumCount;
        this.Hits = hits;
        this.netWorth = worthcount;
        this.Age = age;
        this.quote = quote;
        this.imgLink = imgLink;
    }
    createCard() {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        div.classList.add("panini");
        console.log(newRapper);
        let i = 0;
        for (let element in newRapper) {
            if (element == "firstName" || element == "lastName") {
                if (element == "lastName") {
                    continue;
                }
                console.log(newRapper[element]);
                let p = document.createElement("p");
                p.textContent = `${this.firstName} ${this.lastName}`;
                p.classList.add("fullName");
                div3.appendChild(p);
                div3.classList.add("div3");
                i++;
            } else if (element == "imgLink") {
                div.style.backgroundImage = 'url("' + this.imgLink + '")';
            } else if (element == "stageName") {
                let p = document.createElement("p");
                p.textContent = newRapper[element];
                p.classList.add(element);
                div4.appendChild(p);
                div4.classList.add("div4");
            }
            else {
                // console.log(newRapper[element]);
                let p = document.createElement("p");
                p.innerHTML = `${element} <br> ${newRapper[element]}`;
                p.classList.add(element);
                div2.appendChild(p);
                div2.classList.add("div2");
            }
        }
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);
        document.body.appendChild(div);
    }
}

// newRapper = new Rapper("Marius", "Elting", "Marous", "3", "300", "10000", "21", "Leben", "https://images.unsplash.com/photo-1668503714926-2b80a246de00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",);
// console.log(newRapper);
// newRapper.createCard();

button.addEventListener("click", () => {
    newRapper = new Rapper(firstName.value, lastName.value, stageName.value, albumCount.value, topSingles.value, worthCount.value, age.value, quote.value, imgLink.value);
    newRapper.createCard();
    return newRapper;
});