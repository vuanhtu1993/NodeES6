// // Calculator aria and circumference of rectangle
// const rect = require('./shape/rectangle');
// console.log('Aria',rect.aria(10, 20));
// console.log('Circumference',rect.circumference(10, 20));
// console.log('Date time',rect.currentTime);
//
// // Tinh trung binh
// let arithmeticMean = (arr) => {
//     debugger;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + Number(arr[i]);
//         debugger;
//     }
//     return sum/arr.length;
// };
// console.log(arithmeticMean([1, 2, 3, 4, 5, 6]));

// Http module
let http = require('http');
const port = 3001;
// create server
const server = http.createServer((request, response) => {
    response.write('Welcome my first NodeJs app');
    response.end();
}).listen(port);
console.log(`server start on port: ${port}`);