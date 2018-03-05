const fs = require('fs');
module.exports = {
    createNewFile: (filename) => {
        // fd = file description
       const fd = fs.openSync(filename, 'w');
    },
    saveDataToFile: (data, fileName) => {
         const dataTypeJson = JSON.stringify(data);
         fs.writeFile(fileName, dataTypeJson, 'utf-8', (err, data) => {
             if (err) throw err;
             console.log(`Saved to file ${fileName}`);
         })
    },
    readDataFromFile: (fileName) => {
        //Asynchronous reads file
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            const dataTypeObject = JSON.parse(data);
            console.log(dataTypeObject);
        })
    }
};