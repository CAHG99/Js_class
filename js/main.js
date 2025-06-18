alert("hello coder from Java Script");
console.log("This is a simple log message")
console.error("This is an error message");
console.warn("This is an warning message");
console.info("This is an info message");

console.group("Author Details");
console.log("Name: Antony");
console.log("Year: 2025");
console.groupEnd();

console.time("time");
console.info("testing");
console.timeEnd("time");

prompt("Your message here","Default value");
confirm("Are you coder?");

let company = "Riwi";
company = "riwi1;"

var skill = "Html";
skill += "-CSS";

//this is a single line comment
/*
This is a multi-line comment
*/

// operador ternario
let age = 18;
let statu = (age>=18) ? "adult": "minor";
console.log(statu);

const nombre = "Antony";
// nombre = "ces"

console.assert(condicion, mensaje);

let skill= "HTML, CSS"
console.assert(skill.includes("JavaScript"),"the coder does not know javascript.")

for (initializacion ; condicion; increment){
    //code block to be repeat
}

for (let i=0;i < 5; i++){
    console.log(i);
    continue;
    i++;
}

while (condicion){
    //code to be executed as long as the condition is true
}

let i= 0;

while (i < 5){
    console.log(i);
    i++;
}

do {
    // code to be executed
} while (condicion);
