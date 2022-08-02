var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');
const pi = Math.PI;

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var result = 0;

  result = 4 * Math.pow(pi * radius, 2);

  result = elementResult.innerText = result;

  event.preventDefault();
});
