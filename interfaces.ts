
let myemployee={name:'Arbaj', gender:'male', age:23};
console.log(myemployee.name);

// using interfaces

interface IEmployee {
    readonly name: string; // readonly property
    gender: string;
    age?: number; // optional property
}

let myEmp2: IEmployee = { name: 'Swapnil', gender: 'male', age: 20 };
console.log(`employee 2 details : ${myEmp2.name} ${myEmp2.gender} ${myEmp2.age}`);

// optional property in interface
let myEmp3: IEmployee = { name: 'Najim', gender: 'Male' };
console.log(`employee 3 details : ${myEmp3.name} ${myEmp3.gender} ${myEmp3.age}`);

// readonly property
// myEmp3.name = 'Najim'; // error
myEmp3.age = 21;
console.log(`updated employee 3 details : ${myEmp3.name} ${myEmp3.gender} ${myEmp3.age}`);

// extending interface
// interface can have functions declarations
interface IEmployeeRole extends IEmployee {
    role: string;
    details() : void;
}

let myEmp4 : IEmployeeRole = 
{name : 'Jishan', gender : 'male', age : 20, role : 'employee', 
    details: () => `employee details with role : 
    ${myEmp4.name} ${myEmp4.gender} ${myEmp4.age} ${myEmp4.role}`
};

// console.log(`employee details with role : 
//     ${myEmp4.name} ${myEmp4.gender} ${myEmp4.age} ${myEmp4.role}`);

console.log(myEmp4.details());