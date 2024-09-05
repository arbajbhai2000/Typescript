var Customer = /** @class */ (function () {
    function Customer(fn, ln) {
        this.firstname = fn;
        this.lastname = ln;
    }
    Customer.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    return Customer;
}());
var customer = new Customer('Arbaj', 'Mujawar');
var fullname = customer.getFullName();
console.log(fullname);
