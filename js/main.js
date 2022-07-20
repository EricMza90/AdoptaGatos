
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

let tintoMalbec= "Killka Malbec";
let tintoMalbecPrecio = 1400; 
let tintoCabernet= "Putruele Cabernet Reserva";
let tintoCabernetPrecio = 1200;    
let blancoDulce= "Norton Cosecha Tardia";
let blancoDulcePrecio = 600;
let blancoRose= "Cosecha Tardia Rose Benjamin";
let blancoRosePrecio= 800;
let tuSeleccion = prompt("Ingresa tu seleccion: Tinto Malbec; Tinto Cabernet; Blanco Dulce; Blanco Rose ");
switch(tuSeleccion) {
case "Tinto Malbec":
  alert ("Nuestra Seleccion para vos es: " + tintoMalbec + " " + "Precio $" + " " + tintoMalbecPrecio );
  console.log("Nuestra Seleccion para vos es: " + tintoMalbec + " " + "Precio $" + " " + tintoMalbecPrecio);
  break; 
case "Tinto Cabernet" :
    alert ("Nuestra Seleccion para vos es: " + tintoCabernet + " " + "Precio $" + " " + tintoCabernetPrecio );
    console.log("Nuestra Seleccion para vos es: " + tintoCabernet + " " + "Precio $" + " " + tintoCabernetPrecio );
  break;
case "Blanco Dulce" :
    alert ("Nuestra Seleccion para vos es: " + blancoDulce + " " + "Precio $" + " " + blancoDulcePrecio );
    console.log("Nuestra Seleccion para vos es: " + blancoDulce + " " + "Precio $" + " " + blancoDulcePrecio );
  break; 
case "Blanco Rose" :
    alert ("Nuestra Seleccion para vos es: " + blancoRose + " " + "Precio $" + " " + blancoRosePrecio );
    console.log("Nuestra Seleccion para vos es: " + blancoRose + " " + "Precio $" + " " + blancoRosePrecio);
  break;
default: 
alert ("No has ingresado un valor valido, por favor intenta nuevamente: ");
}
