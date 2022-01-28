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
console.log(sum);
avg = sum / grade.length;
console.log(avg);
