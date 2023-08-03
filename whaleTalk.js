const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(`input[i] is ${i}.`);
    if (input[i] === 'e') {
      resultArray.push(input[i]);
    } // This doubles e
    if (input[i] === 'u') {
      resultArray.push(input[i]);
    } // This double u

    for (let n = 0; n < vowels.length; n++) {
     //console.log(`input[n] is ${n}.`);
      if (input[i] === vowels[n]) {
        //console.log(input[i]);
      resultArray.push(input[i]);
      }
    }
}
//console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();

console.log(resultString);


