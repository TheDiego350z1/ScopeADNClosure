/* Llamamos scope local cuando definimos
una variable en una estrctura de código
y no podemos acceder a la misma de forma global */

const helloWorld = () => {
    /* Declaramos la variable de forma local */
    const hello = "hello World"; 
    console.log(hello);
    //helo World
}

helloWorld();

/* Al tratar de llamar a la vaiable de forma global
no tendremos acceso ya que no esta establecida de
forma global*/

console.log(hello);
//error

var scope = "i am global"; //declaramos una variable global

const functionScope = () => {
    var scope = "i am a just a local"; //declaramos una variable local
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
//i am a just a local

console.log(scope);
//i am global
