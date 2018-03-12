module.exports =  {
    entry: ['./app/index.js', './app/component1.js'],
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js"
    }
};