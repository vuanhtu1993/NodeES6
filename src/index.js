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
function orderCB(customer, foods) {
    foods.forEach((food) => {
        console.log(`${customer.name} order ${food}`)
    })
}
customer1.on('orderFood', orderCB);

customer1.emit('orderFood', customer1, ['Pho', 'Sushi']);