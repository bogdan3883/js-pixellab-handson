let person = {
  name: 'Bogdan',
  surname: 'Mihailescu',
  age: 30,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

let currentYear = new Date().getFullYear();
let larryLength = person.friends.larry.name.length;
let stevenLength = person.friends.steven.name.length;
let carolLength = person.friends.carol.name.length;

console.log(person.friends.carol.age.toString());
console.log(currentYear - person.friends.larry.age);
console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' an mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    '.',
);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.larry.name +
    ', ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    '.',
);

console.log(currentYear - person.friends.steven.age);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.carol.age) +
    ' ani mai mare decat ' +
    person.friends.carol.name +
    '.',
);

console.log(
  'Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are ' +
    person.friends.carol.age +
    ' ani.',
);

console.log(larryLength);
console.log(stevenLength - carolLength);
