// by value (primitives)
let a = 3;
let b = a;

a = 4;
console.log(a);
console.log(b);

// by reference (all object including function)
let c = {name: 'tus'};
let d = c;

c.name = 'Duong';
console.log(c);
console.log(d);