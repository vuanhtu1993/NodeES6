// Working with event
const EventEmitter = require('events');
class Customer extends EventEmitter{
    constructor(name, gender) {
        super();
        this.name = name;
        this.gender = gender;
    }
}
const customer1 = new Customer('AnhTus', 'male');
customer1.on('orderFood', (foods) => {
    foods.forEach((food) => {
        console.log(`${customer1.name} order ${food}`);
    })
});

customer1.emit('orderFood', ['Pho', 'Sushi']);