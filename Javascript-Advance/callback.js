// Concept: Higher order function: A function that takes other
// functions as arguments or returns functions as its result is called a Higher order function
// Dựa trên hoạt động của một hàm khác, nhận một hàm là tham số hoặc return ra một hàm

// Concept: callback: the function that is passed as an argument is called a callback function.
function higherOrder(argument, callback1) {
    callback1(argument);
    setTimeout(function () {
        console.log('xxxx');
    },100);
}

function callBackFinish(arg) {
    console.log(`Xu li hoan thanh ${arg}`);
}


higherOrder('function', callBackFinish, function () {
    console.log('finish all');
});
// Callback LINQ
arr = [1,2,3];
arr.map((value) => console.log(value));

Array.prototype.map2 = function (value) {

};