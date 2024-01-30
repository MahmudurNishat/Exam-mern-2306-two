///
///
// let i = prompt("enter your number");
for (let i = 1; i <= 20; i++) {
  let result = 5 * i;

  if (result < 20) {
    console.log(`5 * ${i} = ${result} - biye korbe na`);
  } else if (result >= 20 && result < 35) {
    console.log(`5 * ${i} = ${result} - biye korbe`);
  } else if (result >= 35 && result < 45) {
    console.log(`5 * ${i} = ${result} - droto koro `);
  } else if (result >= 45 && result <= 100) {
    console.log(`5 * ${i} = ${result} - biye korbe na`);
  } else {
    console.log(`5 * ${i} = ${result} - invalid`);
  }
}
