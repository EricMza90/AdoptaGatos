/* let nombre = "Eric";
console.log(nombre);
let altura = 1.73
let peso = 77
let imc = peso / (altura*altura)
console.log(imc) */

// SINTASIS Y VARIABLES //


//PROMPT PARA TEXTOS

/* let ingreseNombre = prompt("Ingrese su Nombre")
alert("El nombre ingresado es:" + " " + ingreseNombre)
console.log("El nombre ingresado es:" + " " + ingreseNombre) */


//CALCULADORA IMC

/* //ENTRADA
let peso = prompt("Ingrese su Peso");
let altura = prompt("Ingrese su Altura");

//PROCESO
let imc = peso/ (altura*altura);
let imcFinal = imc.toFixed(2); //tofixed sirve para achicar el numero de decimales que queremos ver o mostrar

//SALIDA
alert ("Su indice de masa corporal (IMC) es: "+ imcFinal + "%" );
console.log( "Su indice de masa corporal (IMC) es: "+ imcFinal + "%" ); */

//PROMPT PARA NUMEROS

/* let valorIngresado = parseInt(prompt("Ingrese un Valor:"));// convierte de string a integer
let calculo = valorIngresado * 1.30;
let mensaje = "El valor ingresado es: $" + calculo;
alert(mensaje);
console.log(mensaje)  */


// CONTROL DE FLUJOS //

/* Valores booleanos pueden tomar dos valores true o false, es una condicion de si cumple una condicion toma un camino
si es falso toma otro  */







// IF- ELSE // La condicion se define en el if, else solo aplica si la condicion inicial no se cumple.

/* let unColor = prompt("Ingrese un Color");

if (unColor == "Verde"){
    console.log ("El Color es Verde")
}
else {
    console.log ("El Color  no es Verde")
} */

/* let ingreseNombre = prompt("Ingrese Un Nombre");

if(ingreseNombre == ""){
    alert("Debe ingresar un nombre");

}
else{
    alert("El Nombre Ingresado es: "+ ingreseNombre)
}
console.log( "El Nombre Ingresado es: "+ ingreseNombre) */

// IF ELSE IF // parte de una condicion IF y va analizando las otras condiciones ELSE IF, si es incorrecto aplica ELSE

/* let precio = 200

if (precio < 20) {
    alert ("El precio es: 20")
}
else if (precio < 30) {
    alert ("El precio es: 30")
}
else if (precio < 65) {
    alert ("El precio es: 65")
}
else{
    alert( "El precio es: 100")
} */