let encoInput = document.getElementById("encodeInput");
let decoInput = document.getElementById("decodeInput");
let encoSchlüssel = document.getElementById("encoSchlüssel");
let decoSchlüssel = document.getElementById("decoSchlüssel");

let buttons = document.querySelectorAll("button");
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         12345678901234567890123456
let input;
let schlüssel;
let arrayoutput = [];
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let arrayoutput = [];
        if (e.target.id == "encoButton") {
            input = encoInput.value;
            schlüssel = Number(encoSchlüssel.value);
        } else if (e.target.id == "decoButton") {
            input = decoInput.value;
            schlüssel = Number(decoSchlüssel.value) * (-1);
        }
        for (let inputs of input) {
            for (let buchstabe of abc) {
                if (inputs.toUpperCase() == buchstabe) {
                    let output = abc.indexOf(buchstabe);
                    if (output + schlüssel < 26) {
                        arrayoutput.push(abc.slice(output + schlüssel, output + schlüssel + 1));
                        console.log(output + schlüssel);
                        console.log(abc[1]);
                    } else {
                        console.log(output + schlüssel);
                        arrayoutput.push(abc.slice(output - 26 + schlüssel, 1));
                    }
                }
            }
        }

        console.log(arrayoutput);
    });
}