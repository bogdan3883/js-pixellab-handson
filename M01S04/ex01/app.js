let value = window.prompt('Introduceti un numar: ');
console.log('Numarul introdus este: ' + value);
let messageParagraph = document.getElementById('message');
let message = ' ';

if (value % 2 === 0) {
  message = 'Numarul este par.';
} else {
  message = 'numarul este impar';
}
