//recursion paramter

function factorial(num: number): number {
    if (num === 0) {
        return 1;
    }

    return num * factorial(num - 1);

}

factorial(5);

let fact = factorial(5);
console.log(`factorial of 5 : ${fact}`);

//funstion overloading

function printH(num?: number): number;
function printH(Name?: string): string;

function printH(val?: number | string): any {
    if (typeof val === 'number') {
        return val * val;
    } else if (typeof val === 'string') {
        return val.toUpperCase();
    }
}

let c1 = printH();
console.log(c1);

let c2 = printH('Arbaj');
console.log(c2);

//generaic function
function printI<T>(input: T): T {
    return input;
}

console.log(`PrintI<T> Function Called : ${printI(10)}`);
console.log(`PrintI<T> Function Called : ${printI('Arbaj')}`);
console.log(`PrintI<T> Function Called : ${printI([10, 20, 30])}`);
console.log(`PrintI<T> Function Called : ${printI(false)}`);


//function as parameter 
function printJ(a: number, b: number,
    operation: (a: number, b: number) => number): number {
    return operation(a, b);
}

let add = (a: number, b: number) => a + b;
let returnedval: number = printJ(10, 20, add);
console.log(`PrintJ called function : ${returnedval}`);


let mul =function(a:number ,b:number){
    return a*b;
}
 
returnedval=printJ(10,20,mul);

console.log(`printJ function called : ${returnedval}`);