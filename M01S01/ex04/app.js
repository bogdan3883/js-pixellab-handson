var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var result = 0;

  result = Math.pow(Math.PI * radius, 2);

  result = elementResult.innerText = result;

  event.preventDefault();
});
