const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

/* Función con estructura de Closure */
const monetBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log (`MonetBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = monetBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);