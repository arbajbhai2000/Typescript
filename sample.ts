class Customer{
    firstname:string;
    lastname:string;


constructor (fn:string,ln:string){
    this.firstname=fn;
    this.lastname=ln;
}

getFullName():string{
    return this.firstname+ " " +this.lastname;
}
}

let customer:Customer=new Customer('Arbaj','Mujawar');
var fullname=customer.getFullName();
console.log(fullname);