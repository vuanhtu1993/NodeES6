// Module design pattern
// using Immediately-Invoked-Function-Expressions (IIFE)
//  KHÔNG CẦN TỪ KHÓA THIS VÌ ĐAY LÀ MODULE(CLASS)
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

// OBSERVER DESIGN PATTERN
// create Subject class
let Subject = function () {
    let observers = [];
    return {
        getObserver: function () {
            console.log(observers);
        },
        subcribe: function (observer) {
            observers.push(observer);
            console.log('Added observer')
        },
        unSubcribe: function (observer) {
            let index = observers.indexOf(observer);
            observers.splice(index, 1);
        },
        notifyObserver: function () {
            for (let i = 0; i < observers.length; i++) {
                observers[i].notify(i);
            }
        }
    };
};
// create Observer interface
let Observer = function (name) {
    this.name = name;
    return {
        name: name,
        notify: function (index) {
            console.log("Observer " + index + " is notified!");
        }
    }
};
// invoke part
let subject = new Subject();

let observer1 = new Observer('component1');
let observer2 = new Observer('component2');
let observer3 = new Observer('component3');
let observer4 = new Observer('component4');

subject.subcribe(observer1);
subject.subcribe(observer2);
subject.subcribe(observer3);
subject.subcribe(observer4);

subject.getObserver();
subject.notifyObserver();
