//fucntion declaration
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function printA() {
    console.log("PrintA function called");
}
printA();
function printB(a) {
    console.log("print b function called : ".concat(a));
}
printB(10);
printB('Arbaj');
var printc = function () {
    console.log("printC() function called");
};
printc();
var printD = function () {
    console.log("printD() function called");
};
printD();
function printE(Name) {
    Name = Name || 'Novfil';
    console.log("printE function called ".concat(Name));
}
printE('Arbaj');
printE();
//spread operator
var numbersA = [10, 20, 30];
var numbersB = __spreadArray(__spreadArray([], numbersA, true), [40, 50], false);
console.log("numbers of item in numberB : ".concat(numbersB.length));
//Default Parameter
function printG(Name) {
    if (Name === void 0) { Name = 'Swapnil'; }
    console.log("Print Function called Name : ".concat(Name));
}
printG('Najim');
printG();
