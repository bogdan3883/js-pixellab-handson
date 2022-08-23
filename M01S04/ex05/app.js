let number = prompt('Introdu un numar:');
let limit = prompt('Limita superioara:');

for (let i = 0; i <= limit; i++) {
  if (i % number !== 0) {
    continue;
  }
  console.log(`${i} este multiplu de ${number}`);
}
