let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i = 2 ; i<=20; i++){
    let resultado = ingresarNumero * 2;
    alert( ingresarNumero +" X " + i + " = " +resultado );
    break;
}