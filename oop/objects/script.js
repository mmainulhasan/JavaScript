/*Public*/
// In the constructor 
// This technique is usually used to initialize public instance variables. 
// The constructor's this variable is used to add members to the object.
function Container(param) {
    this.member = param;
}
// construct a new object
var myContainer = new Container('abc');

console.log(myContainer.member);

// In the prototype
// This technique is usually used to add public methods.
// When a member is sought and it isn't found in the object itself, then it is taken from the object's constructor's prototype member.
// The prototype mechanism is used for inheritance.
//  To add a method to all objects made by a constructor, add a function to the constructor's prototype

Container.prototype.stamp = function (string) {
    return this.member + string;
}

myContainer.stamp('def');
console.log(myContainer.stamp('def'));

// Function Constructor
 
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var mainul = new Person('mainul', 1990, 'developer');
var hasan = new Person('hasan', 1969, 'designer');
var nabhan = new Person('nabhan', 1948, 'retired');

mainul.calculateAge();
hasan.calculateAge();
nabhan.calculateAge();

console.log(mainul.lastName);
console.log(hasan.lastName);
console.log(nabhan.lastName);
 



// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var mainul = Object.create(personProto);
mainul.name = 'Mainul';
mainul.yearOfBirth = 1990;
mainul.job = 'developer';

var hasan = Object.create(personProto, {
    name: { value: 'hasan' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});


// Objects
var obj1 = {
    name: 'Mainul',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Mainul',
    city: 'Dhaka'
};

function change(a, b) {
    a = 30;
    b.city = 'Noakhali';
}

change(age, obj);

console.log(age);
console.log(obj.city);