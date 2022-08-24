let friends = [
  {
    name: 'Ricky',
    surname: 'Bobby',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

console.warn(
  'Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends',
);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

console.warn(`Afiseaza numele complet inversat al tuturor prietenilor, insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.
`);

for (let i = 0; i < friends.length; i++) {
  if (friends.name == 'Steven') {
    break;
  }
  console.log(friends[i].surname + ' ' + friends[i].name);
}
