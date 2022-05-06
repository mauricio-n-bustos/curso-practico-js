
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}



const lista1 = [
    100, 200, 3000, 500, 3400, 7000, 550
];

/*
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if(esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1]
}
 */

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function calcularMediana(lista) {

    lista.sort((a, b) => a - b);
    
    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista]
    }

    return mediana;
}


const lista2 = [1, 3, 40, 50, 46, 23, 16, 345, 500, 433, 326];

for(var i = 0; i < lista2; i++) {
    
}