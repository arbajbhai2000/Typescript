//Array 

let numbers : number[]=[10,20];
console.log(`number :${numbers}`);

let string : string[]=['Arbaj'];
console.log(`Name :${string}`);

numbers.push(30,40,50);
console.log(numbers);
console.log(`numbers :${numbers.length}`);

numbers.unshift(2,3,4,25);
console.log(numbers);
console.log(`numbers :${numbers.length}`);

numbers.splice(2,4,6,77);
console.log(`numbers :${numbers.length}`);
console.log(numbers);

//tuple
let student:[number,string,string]=[10,'Arbaj' ,'Male'];
console.log(student);
console.log(`second item : ${student[1]}`);