var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var andrei = {
  name: 'Andrei',
  surname: 'Andreison',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

var person = {
  name: 'Bogdan',
  surname: 'Bogdanson',
  friends: {},
};

person.friends.steven = larry;
larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;
person.friends.steven = andra;
person.friends.larry = steven;
person.friends.andra = steven;
person.friends.carol = andra;
person.friends.andra = carol;

delete person.friends.larry;
delete larry.friends.person;

console.log(larry.friends.person.name + ' ' + larry.friends.person.surname);
console.log();
