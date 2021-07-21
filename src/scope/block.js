const fruits = () => {
    if (true) {
        /* Se define scope local dentro
        de la función */
        var fruits1 = 'apple';
        /* Se defune scope local dentro 
        del bloque de código, en este caso
        la estructura if */
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();
//apple
//error
//error

let x = 1; 
{
    let x  = 2;
    console.log(x);
}

console.log(x);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();