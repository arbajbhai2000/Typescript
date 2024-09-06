//recursion paramter
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
factorial(5);
var fact = factorial(5);
console.log("factorial of 5 : ".concat(fact));
function printH(val) {
    if (typeof val === 'number') {
        return val * val;
    }
    else if (typeof val === 'string') {
        return val.toUpperCase();
    }
}
var c1 = printH();
console.log(c1);
var c2 = printH('Arbaj');
console.log(c2);
//generaic function
function printI(input) {
    return input;
}
console.log("PrintI<T> Function Called : ".concat(printI(10)));
console.log("PrintI<T> Function Called : ".concat(printI('Arbaj')));
console.log("PrintI<T> Function Called : ".concat(printI([10, 20, 30])));
console.log("PrintI<T> Function Called : ".concat(printI(false)));
//function as parameter 
function printJ(a, b, operation) {
    return operation(a, b);
}
var add = function (a, b) { return a + b; };
var returnedval = printJ(10, 20, add);
console.log("PrintJ called function : ".concat(returnedval));
var mul = function (a, b) {
    return a * b;
};
returnedval = printJ(10, 20, mul);
console.log("printJ function called : ".concat(returnedval));
