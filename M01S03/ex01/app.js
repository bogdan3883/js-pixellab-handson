var object = {
  name: 'Bogdan',
  surname: 'Mihailescu',
  age: 30,
  petOwner: false,
  carOwner: true,
};

let currentYear = new Date().getFullYear();
let yearBorn = currentYear - object.age;

console.log(object.name);
console.log(object.age);
console.log(yearBorn);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' de ani.',
);

console.log(object.name + ' s-a nascut in ' + yearBorn + '.');
