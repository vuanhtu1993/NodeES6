// Working with file
let fileManage = require('./fileManage')
const fileName = __dirname + '/../data/temp.txt';
fileManage.createNewFile(fileName);
let jsonObject = {
    food: [
        {name: 'sushi', country: 'Japan'},
        {name: 'pho', country: 'VietNam'},
        {name: 'kimchi', country: 'Korea'},
        {name: 'hamberger', country: 'US'},
    ],
    restaurant: 'AnnMii',
};

fileManage.saveDataToFile(jsonObject, fileName);
fileManage.readDataFromFile(fileName);