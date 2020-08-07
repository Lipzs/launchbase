const name = 'Silvana';
const gender = 'F';
const age = 48;
const contribution = 23;

if (gender == "F") {
  if (contribution >= 30 && (age + contribution) >= 85) {
    console.log(`${name}, you can retire`);
  } else {
    console.log(`${name}, you can't retire yet`);
  };
};

if (gender == "M") {
  if (contribution >= 35 && (age + contribution) >= 95) {
    console.log(`${name}, you can retire`);
  } else {
    console.log(`${name}, you can't retire yet`);
  };
};