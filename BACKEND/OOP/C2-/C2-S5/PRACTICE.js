// Class for trip. in trip have alot of customer 
var Trip = /** @class */ (function () {
    function Trip(busName) {
        this.Depathure = [];
        this.Arrive = [];
        this.Customers = [];
        this.DateTimeDepathure = [];
        this.DateTimeArrive = [];
        this.busName = busName;
    }
    Trip.prototype.setCustomer = function (customer) {
        this.Customers.push(customer);
    };
    Trip.prototype.setDepathure = function (add) {
        this.Depathure.push(add);
    };
    Trip.prototype.setArrive = function (add) {
        this.Arrive.push(add);
    };
    Trip.prototype.setDepathureDatetime = function (date) {
        this.DateTimeDepathure.push(date);
    };
    Trip.prototype.setArriveDatetime = function (date) {
        this.DateTimeArrive.push(date);
    };
    return Trip;
}());
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.Address = [];
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.setAddress = function (add) {
        this.Address.push(add);
    };
    return Customer;
}());
var Address = /** @class */ (function () {
    function Address(city, street) {
        this.city = city;
        this.street = street;
    }
    return Address;
}());
var Datetime = /** @class */ (function () {
    function Datetime(date, time) {
        this.date = date;
        this.time = time;
    }
    return Datetime;
}());
var user1 = new Customer("Ronan", "Ogor");
var user2 = new Customer("Him", "Hey");
var user3 = new Customer("Sovanda", "chib");
var address1 = new Address("Paris", "France");
var address2 = new Address("Phnom Penh", "Cambodia");
var address3 = new Address("Sieam Reap", "Cambodia");
var address4 = new Address("Kampot", "Cambodia");
var date1 = new Datetime("20-03-2024", "06:00p.m.");
var date2 = new Datetime("20-03-2024", "08:00p.m.");
user1.setAddress(address1);
user3.setAddress(address2);
var Trip1 = new Trip("KAKA Bus");
Trip1.setCustomer(user1);
Trip1.setCustomer(user3);
Trip1.setDepathure(address2);
Trip1.setArrive(address4);
Trip1.setDepathureDatetime(date1);
Trip1.setArriveDatetime(date2);
var Trip2 = new Trip("LYHOR Express");
Trip2.setCustomer(user1);
Trip2.setCustomer(user2);
Trip2.setCustomer(user3);
Trip2.setDepathure(address2);
Trip2.setArrive(address4);
Trip2.setDepathureDatetime(date1);
Trip2.setArriveDatetime(date2);
console.log(Trip1);
console.log(Trip2);
