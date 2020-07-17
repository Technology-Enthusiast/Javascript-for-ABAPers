# What we plan to cover!

```javascript
// basic object creation
const obj = { }; // Creating an object using literal notation
const obj = {
  firstName: 'Alex',
  'lastName': 'Martin', // Using string quotes
  dateOfBirth: '18th October',
  friends: [ 'Bob', 'Christine' ]
};
const obj = new Object();

//Calculated stuff
const propertyName = 'firstName';
const obj = {
  [propertyName.toUpperCase()]: 'Alex',
}
// { FIRSTNAME: 'Alex' } 

//Function as key values
const obj1 = {
  firstName: 'ALEX',
  lastName: 'MARTIN',
  printFullName() {
    return `${this.firstName} ${this.lastName}`
  }
};
obj1.printFullName();


for-in loops
for-in loop is just like a normal for loop except that it iterates on an object. You get the properties one by one. Here’s an example using obj **object** —
for (const property in obj) {
  const value = obj[property]; // Read the value 
  console.log(property, value);
}
// firstName Alex
// lastName Martin
// dateOfBirth 18th October
// friends [ 'Bob', 'Christine' ]

Object.keys()
Object.keys() is similar to for-in loop except that it only returns the object’s own keys in an array. That is, the prototype chain is not consulted. We can then iterate on this array using a for-of or a for loop. Here’s an example —

const allProperties = Object.keys(obj); 
// => [ 'firstName', 'lastName', 'dateOfBirth', 'friends' ]

for (const property of allProperties) {
  const value = obj[property];
  console.log(property, value);
}

Object.values()
Object.values() has similar restrictions as Object.keys(), but it returns an array of values instead of the keys.
const allValues = Object.values(obj);
// => [ 'Alex', 'Martin', '18th October', [ 'Bob', 'Christine' ] ]

Object.entries()
Same as .keys() and .values() except that we get an array of [key, value] pairs.
const allEntries = Object.entries(obj);
// => Output
[ [ 'firstName', 'Alex' ],
  [ 'lastName', 'Martin' ],
  [ 'dateOfBirth', '18th October' ],
  [ 'friends', [ 'Bob', 'Christine' ] ] ]

  Comparison
There are no good in-built of ways of comparing two objects. When you use the == or === operators, they only compare the references of the objects. References can be understood as “memory addresses” of the objects. Only primitives types are compared by values.
Now, two objects can have the same key-values pairs but they can’t occupy the same location in memory or reference. The object is only equal to itself as the example shows us —
const obj1 = {
  name: 'Alex',
}
const obj2 = {
  name: 'Alex',
}
obj1 === obj2    // => false
obj1 === obj1    // => true

Object Spread Operator
We can use ... operator to a top-level deep copy. Here’s an example —
const obj1 = {
  name: 'Alex',
  nestedObj: {
    address: 'Earth'
  }
}
const obj2 = {
  ...obj1      // Spreading the properties of obj1
}
```