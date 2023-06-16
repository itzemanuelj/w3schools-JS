/// JavaScript Objects

const car = {
  type: "tesla",
  model: "3",
  year: 2023,
};
console.log(car);

/// Object Definition

const person = {
  name: "emanuel",
  age: 22,
  isOnline: true,
};

/// Object Properties
// objectName.propertyName
console.log(person.name);
console.log(person.age); //or

console.log(person["name"]);
console.log(person["age"]);

/// Example
const team = {
  state: "Michigan",
  city: "Detroit",
  name: "Pistons",
  teamInfo: function () {
    return this.city + "" + this.state;
  },
};

/// Accessing Object Methods
//objecctName.methodNmae()
team.teamInfo();

name = team.teamInfo();

/// Do Not Declare Strings, Numbers, and Booleans as Objects!

x = new String(); //str object
y = new Number(); //number obj
z = new Bool(); //bool object

/// Test Yourself With Exercises
//Alert "John" by extracting information from the person object.
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
alert(person1.firstName);
