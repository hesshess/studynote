//문제3
let str =
  '수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.';

const word = '수업시간';
const flen = word.length;
let find = true;
let count = 0;

while (find) {
  console.log(str);
  p = str.indexOf(word);
  find = p > -1;

  if (find) {
    count++;
    str = str.substring(p + flen);
  }
}

console.log(count);

//문제4

//0개의 원소를 갖는 배열
const lotto = [];
console.log(lotto);

//6회의 반복을 수행
for (let i = 0; i < 6; i++) {
  //console.group(`${i}번째 원소 결정하기`);
  //console.log(lotto);
  //중복되지 않는 숫자가 몇 번째에 생성될지 알 수 없으므로 무한반복
  while (true) {
    //랜덤한 숫자
    //const rnd = random(1,45);
    const rnd = random(1, 6);

    //rnd값이 lotto배열안의 원소와 중복되지 않는다면?
    if (!lotto.includes(rnd)) {
      //console.log(`>>>${rnd}는 중복되지 않음`);
      lotto.push(rnd);
      break;
    } else {
      //console.log(`>>>${rnd}는 중복됨`)
    }
  }
  //console.groupEnd();
}

console.log(lotto);
