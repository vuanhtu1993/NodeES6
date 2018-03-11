// Understanding Promise
// How
let promise = new Promise((resolve, reject) => {
    if (error) {
        reject('Error')
    }
    setTimeout(() => {
        resolve('data from promise');
    }, 200);
});

promise
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    });

// FOR EXAMPLE: promise and ajax
function get(urlImg) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Get image fail !!!')
        }
        resolve(data);
    })
}

let promise2 = ajax.getImage('gaidep.com');
promise2
    .then(value => console.log(value))
    .catch(error => console.log(error));

// Profit of Promise
// 1. Han che callback hell (Promise chaining)
// 2. Bắt lỗi tốt hơn
// 3. Promise.all
let promise3 = ajax.getImage('gaixinh.net');
promise3
    .then((value) => console.log(value))
    .then(() => {
        // do sth1
    })
    .then(() => {
        // do sth2
    })
    .catch((error) => console.log(error));
