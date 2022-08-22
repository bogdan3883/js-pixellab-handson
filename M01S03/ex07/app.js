var person = {
  firstName: 'Jim',
  lastName: 'Bobby',
  email: 'jimmyb@gmail.com',
  birthYear: 1980,
  zipCode: '010987',
  pets: [
    {
      name: 'Ricky',
      species: 'Dog',
      age: 5,
    },
    {
      name: 'Lady',
      species: 'Cat',
      age: 8,
    },
    {
      name: 'Killer',
      species: 'Dog',
      age: 1,
    },
  ],
};

console.log(
  'Numele meu este ' +
    person.firstName.toString() +
    ' ' +
    person.lastName.toString() +
    ' si am ' +
    person.pets.length.toString() +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[2].age +
    ' ani.',
);

var currentYear = new Date().getFullYear();
var personAge = currentYear - person.birthYear;
var ageDifference = personAge - person.pets[0].age;
let petName = person.pets[0].name;

console.log(currentYear - person.pets[1].age);
console.log(ageDifference);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    ageDifference +
    ' ani.',
);

let prop01 = document.getElementById('prop01');

console.log(
  person.firstName +
    ', ' +
    person.pets[0].name +
    ', ' +
    person.pets[1].name +
    ', ' +
    person.pets[2].name +
    prop01,
);

console.log(document.getElementById('prop01'));
