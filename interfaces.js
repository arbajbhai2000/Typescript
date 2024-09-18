var myemployee = { name: 'Arbaj', gender: 'male', age: 23 };
console.log(myemployee.name);
var myEmp2 = { name: 'Swapnil', gender: 'male', age: 20 };
console.log("employee 2 details : ".concat(myEmp2.name, " ").concat(myEmp2.gender, " ").concat(myEmp2.age));
// optional property in interface
var myEmp3 = { name: 'Najim', gender: 'Male' };
console.log("employee 3 details : ".concat(myEmp3.name, " ").concat(myEmp3.gender, " ").concat(myEmp3.age));
// readonly property
// myEmp3.name = 'Najim'; // error
myEmp3.age = 21;
console.log("updated employee 3 details : ".concat(myEmp3.name, " ").concat(myEmp3.gender, " ").concat(myEmp3.age));
var myEmp4 = { name: 'Jishan', gender: 'male', age: 20, role: 'employee',
    details: function () { return "employee details with role : \n    ".concat(myEmp4.name, " ").concat(myEmp4.gender, " ").concat(myEmp4.age, " ").concat(myEmp4.role); }
};
// console.log(`employee details with role : 
//     ${myEmp4.name} ${myEmp4.gender} ${myEmp4.age} ${myEmp4.role}`);
console.log(myEmp4.details());
