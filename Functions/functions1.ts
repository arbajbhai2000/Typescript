//fucntion declaration

function printA() {
    console.log(`PrintA function called`);
}

printA();

function printB(a: any) {
    console.log(`print b function called : ${a}`);
}
printB(10);
printB('Arbaj');

let printc = function () {
    console.log(`printC() function called`);
}

printc();

let printD = () => {
    console.log(`printD() function called`);
}

printD();

function printE(Name?: string) {
    Name = Name || 'Novfil';
    console.log(`printE function called ${Name}`)
}

printE('Arbaj');
printE();

//spread operator
let numbersA:number[]=[10,20,30];
let numbersB:number[]=[...numbersA,40,50];

console.log(`numbers of item in numberB : ${numbersB.length}`);


//Default Parameter
function printG(Name : string='Swapnil'){
    console.log(`Print Function called Name : ${Name}`);
}

printG('Najim');
printG();