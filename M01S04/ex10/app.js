var person = {
  name: 'Bogdan',
  surname: 'Bogdanson',
  age: 18,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 80,
    },
  ],
};

person.skills.forEach(function (skill, index) {
  if (skill.includes('a')) {
    console.log(skill);
  }
});
let message = 'Prietenii mei se numesc: ';
person.friends.forEach(function (friend, index, friends) {
  let punctuation = ', ';
  if (index === friends.length - 1) {
    punctuation = '.';
  }

  if (index === friends.length - 2) {
    punctuation = ' si ';
  }
  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);
