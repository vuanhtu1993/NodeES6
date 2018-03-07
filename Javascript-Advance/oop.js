// Concept: ENCAPSULATION and INHERITANCE are 2 importan principle
// are important because they allow us to build applications with reusable code, scalable architecture,
// and abstracted functionalities. Maintainable, scalable, efficient.


// ABSTRACTION : Defined a class based on The constructor function (not return anything)
// is JavaScript's version of a class
// Alternative: use prototype pattern to create property and method for class
function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
    };
}
// ENCAPSULATION: be reveal by module design pattern
    let Encapsulation = (function () {
        // declare private variable and function
        return {
            // declaration public variable and closure function
        }
    })();
// Implementation of Combination Constructor/Prototype Pattern
function User(name, email) {
    // this => {}
    this.name  = name;
    this.email = email;
    this.score = [];
    this.currentScore = 0;

    return this;
}
User.prototype = {
    // The one disadvantage of overwriting the prototype is that the constructor
    // property no longer points to the prototype, so we have to set it manually.
    constructor: User,
    winScore: function (score) {
        this.score.push(score);
        this.currentScore = score;
        console.log('New score has added');
    },
    showScoreAndName: function () {
        console.log(`${this.name} has ${this.score.join(",")}`);
    },
    changeEmail(newEmail) {
        this.email = newEmail;
        console.log('Email has changed !');
    }
};



