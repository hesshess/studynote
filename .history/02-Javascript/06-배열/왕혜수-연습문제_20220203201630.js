//문제1
//다음의 소스코드는 boolean 데이터를 저장하고 있는 배열에 대한 처리를 보여준다
//실행 결과에서 제시한 것과 같이 배열에 저장되어 있는 값들을 반전(t->f,f->t로)
//변환하는 처리를 완성하시오

var check_list = [true, false, false, true, false];
console.log('before--->' + check_list);

for (let i = 0; i < check_list.length; i++) {
  if (check_list[i] == true) {
    check_list[i] = false;
  } else {
    check_list[i] = true;
  }
}
console.log('after--->' + check_list);

/** 
for (let i = 0; i < check_list.length; i++) {
    check_list[i] = !check_list[i];
}*/

//문제2
//다음표는 어떤 학생의 과목별 점수이다
//이 학생의 총점과 평균점수를 구하는 프로그램에 대한 아래의 소스코드를 완성하시오

var grade = [75, 82, 91]; //성적표 배열
var sum = 0,
  avg = 0; //총점과 평균점수 변수 생성

//총점 구하기
for (let i = 0; i < grade.length; i++) {
  sum += grade[i];
}
//평균 구하기
console.log(sum);
avg = sum / grade.length;
console.log(avg);
//arr의 값을 소수점 둘째자리로 제한한다.
avg = avg.toFixed(2);
console.log('총점: ' + sum + '점, 평균점수: ' + avg + '점');

/**
 for(const item of grade){
   sum+=item;
 }
 */

//문제3

var time = [7, 5, 5, 5, 5, 10, 7];
var money = 0;
for (let i = 0; i < time.length; i++) {
  /**
 1)
 if (i < 4) {
   money += time[i] * 4500;
 }else{
money += time[i] * 5200;
 }

 2)
 let x = 0;
 if(i <4){
   x=4500;
 }else{
   x=5200;
 }

 3)
 let x = (i <4) ? 4500 : 5200;
 money += time[i] * x;

 4)
 money += time[i] *(i <4) ? 4500 : 5200;
 */
  money += time[i] * 4500;
  if (i > 3) {
    money += time[i] * 700;
  }
}
console.log(money);

//문제4
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;

// for(let i = 0; i < price.length;i++){
//   money += price[i]*qty[i]}

// console.log("전체 결제 금액 " + money + "원")

// //문제5
let max = price[0] * qty[0];
for (let i = 1; i < price.length; i++) {
  if (max < price[i] * qty[i]) {
    max = price[i] * qty[i];
  }
}
console.log('가장 놓은 금액은 ' + max + '원');

//문제6

let free = 0;
for (let i = 0; i < price.length; i++) {
  let itemPrice = price[i] * qty[i];
  if (itemPrice >= 80000) {
    free++;
  }
}
console.log('무료배송 항목:' + free + '건');

//문제7
var price = [209000, 109000, 119000, 109000, 94000];
console.log('상품 가격 -->' + price);

for (var i = 0; i < price.length - 1; i++) {
  for (var j = i + 1; j < price.length; j++) {
    if (price[i] > price[j]) {
      var temp = price[i];
      price[i] = price[j];
      price[j] = temp;
    }
  }
}
console.log('낮은 가격순 -->' + price);

//문제 8

//역순 배치 공식 1)배열길이 반만큼 반복 2)i번째와 길이 -i-1번째 교환
var arr = [5, 3, 2, 8, 9];
console.log('before --> ' + arr);
for (var i = 0; i < parseInt(arr.length / 2); i++) {
  var tmp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = tmp;
}
console.log('after -->' + arr);

//문제 9
var student = ['둘리', '도우너', '또치', '희동'];
var grade = [
  [78, 89, 96],
  [62, 77, 67],
  [54, 90, 80],
  [100, 99, 98],
];
let sum_avg = 0;
for (let i = 0; i < grade.length; i++) {
  var sum = 0,
    avg = 0;
  for (let j = 0; j < grade[i].length; j++) {
    sum += grade[i][j];
  }
  avg = sum / grade[i].length;
  console.log(
    student[i] + '의 총점:' + sum + '점, 평균: ' + avg.toFixed(2) + '점'
  );
  sum_avg += avg;
}
let avg_avg = 0;
avg_avg = sum_avg / student.length;
console.log('반평균' + avg_avg + '점');

//문제11

const myArr1 = [
  [500, 291],
  [320, 586],
  [100, 460],
  [120, 558],
  [92, 18],
  [30, 72],
];
let total = 0;
for (let i = 0; i < myArr1.length; i++) {
  let selling_price = 0;
  selling_price = myArr1[i][0] * 0.9;
  total += selling_price * myArr1[i][1];
}
console.log('아이템 총 판매가격 : ' + total + 'G');
