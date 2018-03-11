// understanding this in js
// CÓ THIS CAUSE CREATE CLASS
let c = function (name) {
    this.name = name;

    function abc() {
        console.log(this);
    }

    this.log = function (cb) {
        cb();
    }
};


// Change the context of this
let obj = {};
obj.myMethod = function () {
    console.log(this);
    setTimeout(function () {
        console.log(this);
        // có thể thay bind bằng call và apply
    }.bind(this), 1000);
};

obj.myMethod();


function getData(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (n === 2) {
                    reject('Err');
                } else {
                    resolve('data');
                }
            }
            ,
            1000
        );
    })
}

)
;
}
