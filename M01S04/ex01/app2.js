var userName = prompt('Cum te cheama?');
var letter = prompt('Introdu o litera: ');
var userNameParagraph = document.getElementById('userName');
var characterCountParagraph = document.getElementById('characterCount');

userNameParagraph.innerText = `Ma numesc ${userName}.`;
characterCountParagraph.innerText = `Numele introdus are ${userName.length} caractere.`;

if (userName.includes(letter) === true) {
  alert(`Numele introdus contine litera ${letter}.`);
} else {
  alert(`Numele introdus nu contine litera ${letter}.`);
}
