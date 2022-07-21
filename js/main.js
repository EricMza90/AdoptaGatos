let entrada = 'Tienda de vinos "Wines of Mendoza"';

    alert( entrada );

    console.log(entrada);

let edad = prompt("Por Favor Ingresa tu edad: ");
    console.log(edad);

    if (edad >= 18){
    let nombre = prompt("Por favor Ingresa tu Nombre");
    alert("Bienvenido " + nombre);
    console.log("Bienvenido " + nombre);

}   else{
    alert("Eres menor de edad, no puedes ingresar al sitio!!!");
    console.log("Eres menor de edad, no puedes ingresar al sitio!!!");

}

function calcularPrecio (precioVino, cantidadVino, porcentajeDescuento) {
  let descuento = (precioVino * porcentajeDescuento) / 100;

  let precioConDescuento = precioVino - descuento;

  return (precioConDescuento * cantidadVino);
}

let vino = parseFloat(prompt("Ingrese el precio del vino que deseas comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades quieres comprar:"));
let descuento = parseInt(prompt("Tienes un cupon?? Ingresa el porcentaje aqui:"));

let precioFinal = calcularPrecio(vino, cantidad, descuento);
alert("El precio total de tu compra es $" + precioFinal);
alert("Que Disfrutes tu compra!!");