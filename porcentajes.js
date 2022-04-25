function porcentajeDeDescuento(precio, descuento) {    
    const precioFinal = precio *(100 - descuento) / 100;
    return precioFinal;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice").value;
    const inputDiscount = document.getElementById("inputDiscount").value;

    const precioConDescuento = porcentajeDeDescuento(inputPrice, inputDiscount);

    const resultP = document.getElementById("resultP");
    resultP.innerText = `El precio con decuento es: $${precioConDescuento}`;
}

