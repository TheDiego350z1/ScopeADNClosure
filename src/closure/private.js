const person = () => {
    var saveName = "Name";
    return {
        getname: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getname());

newPerson.setName('Diego');
console.log(newPerson.getname());

/* Al momento de querer modificar el valor
de la variable saveName, solo se puede realizar
por medio de los metodos que hemos definido
dentro de la función */