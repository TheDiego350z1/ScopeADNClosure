/*Con var se puede declarar una variable global 
y se pede acceder a la variable desde todo el 
programa y modificar el valor de la misma*/
var hello = 'Hello'; 

/*Con la palaabra reservada "let" se puede declarar
una variable local, se puede acceder a la variable
en todo el programa pero no se puede asignar otro valor
o sobre escribir el valor de la misma*/
let world = 'Hello world!'; 

/*Con la palabra reservada const sucede lo mismo que
con la palabra reservada let, se puede declara como
globar, pero no se puede reasignar y sobre escribir
el valor de la misma*/
const hellowWord = 'Hello word';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(hellowWord);
}

anotherFunction();
/* Una mala practica es realizar la asignación de variables
globales desde las funciones */
const helloWord = () => {
    globalVar = 'Im globa';
}

helloWord();
console.log(globalVar);

/* Otra mala practica es la asignación de doble variables
variables dentro de funciones */

const oterFun = () => {
    var localVar = globalvar = 'Im Global';
}

oterFun();
console.log(globalvar);
//Im Global