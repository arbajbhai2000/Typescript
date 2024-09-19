// let v1 : number=100;
// console.log(v1);

// v1 =100.22;
// console.log(v1);

// let v4 : boolean=true;
// console.log(v4);

// v4=false;
// console.log(v4);

// // let sname:string='Arbaj';
// // console.log(sname);

// let sname : string='Arbaj';
// let lname:string='Mujawar';
// console.log(sname);

// let full =sname + lname;
// console.log(full);

// full = sname + ' ' +lname;
// console.log(full);

// full = sname.concat(' ', lname);
// console.log(full);

// full=`Full Name Is : ${sname} ${lname}`;
// console.log(full); 

let sname: string ="Arbaj Mujawar";
console.log(`input string =${sname}`);

console.log(`String In Upper caswe :${sname.toUpperCase()}`);
console.log(`String In Lower Case : ${sname.toLowerCase()}`);

console.log(`Number of Character : ${sname.length}`);
console.log(`with Trim : ${sname.trim} `);
console.log(`Number Of Character With Trim : ${sname.trim().length}`);  

console.log(`Index of A : ${sname.indexOf('A')}`);
console.log(`Last Index Of :${sname.lastIndexOf('a')} `);
 
sname='Arbaj Mujawar';

let Index: number=sname.indexOf(' ');

let firstname : string=sname.substring(0,Index);
console.log(`Firstname : ${firstname}`);

let lastname : string= sname.substring(Index +1 ,sname.length);
console.log(`Last name : ${lastname}`);



