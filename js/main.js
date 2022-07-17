/* let nombre = "Eric";
console.log(nombre);
let altura = 1.73
let peso = 77
let imc = peso / (altura*altura)
console.log(imc) */

//Prompt para Textos

/* let ingreseNombre = prompt("Ingrese su Nombre")
alert("El nombre ingresado es:" + " " + ingreseNombre)
console.log("El nombre ingresado es:" + " " + ingreseNombre) */


//Calculadora IMC

let peso = prompt("Ingrese su Peso");
let altura = prompt("Ingrese su Altura");
let imc = peso/ (altura*altura);
let imcFinal = imc.toFixed(2); //tofixed sirve para achicar el numero de decimales que queremos ver o mostrar
alert ("Su indice de masa corporal (IMC) es: "+ imcFinal + "%" );
console.log( "Su indice de masa corporal (IMC) es: "+ imcFinal + "%" );

//Prompt para Numeros

/* let valorIngresado = parseInt(prompt("Ingrese un Valor:"));// convierte de string a integer
let calculo = valorIngresado * 1.30;
let mensaje = "El valor ingresado es: $" + calculo;
alert(mensaje);
console.log(mensaje)  */