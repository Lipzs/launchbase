const name = 'Carlos';
const weight = 84;
const height = 1.88;

const imc = weight / (height * height);

if (imc >= 30) {
  console.log(`${name} you are overweight`)
}
else if (imc < 30) {
  console.log(`${name} you aren't overweight`)
};

console.log(imc);