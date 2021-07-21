const fuits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fuits();
//apple

/* Ya que se ha definido la variable fruit de
forma local en la función, al momento de llamarla
de forma global no tendremos acceso a ella */

console.log(fruit);
//error

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();