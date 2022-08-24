// let num1 = prompt('First number: ');
// let num2 = prompt('Second number: ');

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// let num1 = prompt('First number :');
// let num2 = prompt('Second number :');
// let num3 = prompt('Third number :');

// let result = num1 * num2 * num3;

// console.log(
//   `The multiplication of ${num1}, ${num2} and ${num3} results in ${result}`,
// );
// if (result < 0) {
//   console.log(`The sign is -`);
// } else {
//   console.log(`The sign is +`);
// }

// let num1 = prompt('First number :');
// let num2 = prompt('Second number :');
// let num3 = prompt('Third number :');

// console.log(`Your numbers are ${num1}, ${num2} and ${num3}`);

// if (num1 < num2 && num1 < num3 && num2 < num3) {
//   console.log(`Your sorted numbers are ${num1}, ${num2}, ${num3} `);
// } else if (num1 < num2 && num1 < num3 && num3 < num2) {
//   console.log(`Your sorted numbers are ${num1}, ${num3}, ${num2} `);
// } else if (num2 < num1 && num2 < num3 && num1 < num3) {
//   console.log(`Your sorted numbers are ${num2}, ${num1}, ${num3} `);
// } else if (num2 < num1 && num2 < num3 && num3 < num1) {
//   console.log(`Your sorted numbers are ${num2}, ${num3}, ${num1} `);
// } else if (num3 < num2 && num3 < num1 && num1 < num2) {
//   console.log(`Your sorted numbers are ${num3}, ${num1}, ${num2} `);
// } else if (num3 < num2 && num3 < num1 && num2 < num1) {
//   console.log(`Your sorted numbers are ${num3}, ${num2}, ${num1} `);
// }

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

let students = [
  {
    name: 'David',
    grade: 80,
  },
  {
    name: 'Vinoth',
    grade: 77,
  },
  {
    name: 'Divya',
    grade: 88,
  },
  {
    name: 'Ishitha',
    grade: 95,
  },
  {
    name: 'Thomas',
    grade: 68,
  },
];

// for (let i = 0; i <= students.length; i++) {
//   let mark = '';
//   if (students[i].grade <= 100 && students[i].grade >= 90) {
//     mark = 'A';
//   } else if (students[i].grade < 90 && students[i].grade >= 80) {
//     mark = 'B';
//   } else if (students[i].grade < 80 && students[i].grade > 70) {
//     mark = 'C';
//   } else if (students[i].grade < 70 && students[i].grade > 60) {
//     mark = 'D';
//   } else if (students[i].grade < 60 && students[i].grade > 50) {
//     mark = 'F';
//   }
//   console.log(
//     `${students[i].name} scored ${students[i].grade} on the test -- ${mark}`,
//   );
// }
// var x, y, chr;
// for (x = 1; x <= 10; x++) {
//   for (y = 1; y < x; y++) {
//     chr = chr + '*';
//   }
//   console.log(chr);
//   chr = '';
// }

const img_result = document.getElementById('img_result');
const button = document.getElementById('button');

button.addEventListener('click', getRandomImg);

function getRandomImg() {
  fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((data) => {
      img_result.innerHTML = `<img src="${data.file}"/>`;
    });
}
