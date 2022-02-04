const bloody_type = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = { A: 0, B: 0, AB: 0, O: 0 };
for (let i = 0; i < bloody_type.length; i++) {
  if (bloody_type[i] == 'A') {
    result.A++;
  } else if (bloody_type[i] == 'B') {
    result.B++;
  } else if (bloody_type[i] == 'AB') {
    result.AB++;
  } else {
    result.O++;
  }
}
console.log(result);

// //3) 빈 객체 확장
// const myJson = {}; //빈 객체
// console.log(myJson);

// for (let i = 0; i < 10; i++) {
//   const key = 'value' + i;
//   myJson[key] = i * 100;
// }
// console.log(myJson);
