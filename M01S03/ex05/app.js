var person = {
  name: 'Bogdan',
  surname: 'Bogdanson',
  age: 30,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 30,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 30,
    },
  ],
};

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.log('Sunt ' + person.name + ' si acum invat ' + person.skills[1] + '.');
console.log(
  'Am ' +
    person.friends.length +
    ' prieteni:' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ', ' +
    person.friends[2].name +
    '.',
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invat ' +
    person.skills[1] +
    '.',
);

console.log(
  'Sunt ' +
    person.name +
    ' si stiu ' +
    person.skills[0].toUpperCase() +
    ' si ' +
    person.skills[2].toUpperCase() +
    '.',
);

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].surname +
    ', ' +
    person.friends[1].surname +
    ', ' +
    person.friends[2].surname +
    '.',
);

console.log(
  'Numele meu este ' +
    person.name +
    ' ' +
    person.surname +
    ', am ' +
    person.age +
    ' de ani si ' +
    person.friends.length +
    ' prieteni.',
);
