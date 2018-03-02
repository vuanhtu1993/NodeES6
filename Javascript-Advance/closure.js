// In JavaScript, a closure is any function that keeps reference to variables
// from its parent’s scope even after the parent has returned.

// Point 1: You can refer to variables defined outside of the current function.
// explain: function ate() can refer to variable and para of parent
function Person1(name) {
    this.name = name;
    let major = 'telecommunication';
    function getMajor() {
        console.log(name + ' Who person is learning ' + major);
    }
    return getMajor();
}
Person1('Anh Tus');

// point2: Closure(inner function) can refer to var defined in the outlet function even after have returned
// explain: getName() still access to and remember name var when getName is executed outside lexical scope
function Person2(name) {
    this.name = name;
    let major = 'telecommunication';
    function getMajor() {
        console.log(name + ' Who person is learning ' + major);
}
    return getMajor;
}
// b = function getName;
const b = Person2('Duong');
b();

// Point3: Inner functions store their outer function’s variables by reference, not by value
// explain: So, closures can both read and update their stored variables, and the updates are visible to any closures that have access to them
function Person3(name) {
    this.name = name;
    let major = 'telecommunication';
    function getMajor() {
        console.log(name + ' Who person is learning ' + major);
    }
    function setMajor(newMajor) {
        major = newMajor;
    }
    return {
        getMajor: getMajor,
        setMajor: setMajor,
    }
}
let c = Person3('Viet');
c.setMajor('Assurance');
c.getMajor();

// Apply of closure
// 1. Bao mat , tat cac bien cua mot ham thi phai dc get va set thong qua phuong thuc get va set
// 2. Co the goi bat cu luc nao, ke ca ngoai lexical scope
// 3. call back

//Closures are frequently used in JavaScript for object data privacy,
// in event handlers and callback functions, and in partial applications,
// currying, and other functional programming patterns.