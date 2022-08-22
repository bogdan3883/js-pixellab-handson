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
console.log(object.age.toString());

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' de ani.',
);

console.log(
  object.name.toString() + ' s-a nascut in ' + yearBorn.toString() + '.',
);

console.log(
  'Ma numesc ' +
    object.name.toString() +
    ' ' +
    object.surname.toString() +
    ' si am ' +
    object.age.toString() +
    ' de ani.',
);
