// Module design pattern using Immediately-Invoked-Function-Expressions (IIFE)
let Animal = (function () {
    let name = 'chicken';
    let attribute = 'run';
    getName = function () {
        console.log(name);
    };
    setName = function (newName) {
        name = newName
    };
    return {
        getName: getName,
        setName: setName,
    }
})();

console.log(Animal.name);
Animal.getName();
Animal.setName('Anh Tus');
Animal.getName();