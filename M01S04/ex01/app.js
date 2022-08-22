let value = window.prompt('Introduceti un numar: ');
let messageParagraph = document.getElementById('message');
let message = ' ';
let number = window.prompt('Cu ce numar compar?');

value = Number(value);
number = Number(number);

if (value > number) {
  message = `Numarul ${value} introdus este mai mare decat ${number}.`;
} else if (value === number) {
  message = `Numar ${value} este egal cu ${number}`;
} else {
  message = `Numarul ${value} introdus este mai mic decat ${number}.`;
}

console.log(message);
messageParagraph.innerText = message;
