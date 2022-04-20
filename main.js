var nombre = "Mauricio";
var apellido = "Bustos";
var user = "mauricio.n.bustos";
var edad = 32;
var email = "mauricio.n.bustos@@gmail.com";
var mayorEdad = true;
var ahorrado = 20000;
var deudas = 100000;


console.log(`Nombre completo: ${nombre} ${apellido}`);
console.log(`Dinero real: ${ahorrado - deudas}`);

function presentacion(name, lastName, nickName){
    completeName = `${name} ${lastName}`;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickName}`);
}



const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if(tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} if(tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if(tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

var paqueteSuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];



for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while(i < 5) {
    i++;
    console.log("El valor de i es: " + i);
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let j = 10;

while(j >= 2) {
    j--;
    console.log("El valor de j es: " + j);
}

let k = 10;

do {
    console.log("El valor de k es: " + k);
    k--;
} while(k >= 2);



while( sumando !== 4) {
    var sumando = prompt("¿Cuanto es de 2 + 2?");
}

if(suma === 4) {
    console.log("Felicitaciones");
} else {

}



