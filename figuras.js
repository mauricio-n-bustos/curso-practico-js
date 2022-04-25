// Cuadrado

console.group("CUADRADO");
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden ${ladoCuadrado}`);


function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado}`);

// const areaCuadrada = ladoCuadrado * ladoCuadrado;
function areaCuadrada(lado) {
    return lado *lado; 
}
// console.log(`El area cuadrada es ${areaCuadrada}`);
console.groupEnd();

// Triangulo

console.group("TRIANGULO");
// const ladoTrianguloA = 6;
// const ladoTrianguloB = 6;
// const ladoTrianguloC = 4;
// const altura = 5.5 ;

// console.log(`Los lados del triangulo miden ${ladoTrianguloA}cm ${ladoTrianguloB}cm ${ladoTrianguloC}cm`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

console.group("CIRCULO");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aqui interactuamos con el HTML

// Funciones del cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado").value;

    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado").value;
    
    const area = areaCuadrada(input);
    alert(area);
}



// Funciones del triangulo

function calcularPerimetroTriangulo() {
    const ladoA = Number(document.getElementById("inputLadoTrianguloA").value);
    const ladoB = Number(document.getElementById("inputLadoTrianguloB").value);
    const base = Number(document.getElementById("inputBaseTriangulo").value);

    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputBaseTriangulo").value;
    const altura = document.getElementById("inputAlturaTriangulo").value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

// Calcular la altura de un triangulo isosceles:

function alturaTrianguloIsosceles(ladoA, ladoB, base) {
    if(ladoA === ladoB || ladoA === base || ladoB === base) {
        console.log(Math.sqrt((Math.pow(ladoA, 2) - Math.pow(base, 2) /4)))
    } else {
        console.log("Este triangulo no es isosceles");
        }
}

function porcentaje(precio, descuento) {    
    const precioFinal = precio *(100 - descuento) / 100;
    console.log(precioFinal);
}