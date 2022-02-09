//##문제1
function Student(kor, eng, math) {
  this._kor = kor;
  this._eng = eng;
  this._math = math;
}
Student.prototype = {
  sum: function () {
    return this._kor + this._eng + this._math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

console.group('반복문 안에서 객체 활용');
const grade = [
  ['철수', 92, 81, 77],
  ['영희', 72, 95, 98],
  ['민혁', 80, 86, 84],
];
for (const item of grade) {
  const s = new Student(item[1], item[2], item[3]);
  console.log(
    '%/s의 총점은 %d점이고 평균은 %d점 입니다',
    item[0],
    s.sum(),
    s.avg()
  );
}
console.groupEnd();

console.group('하드코딩');
const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const S3 = new Student(80, 86, 84);
console.log('철수의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('영희의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('민혁의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());

//##문제2

function Rectangle() {
  this._width = null;
  this._height = null;
}

Rectangle.prototype = {
  get width() {
    return this._width;
  },
  set width(param) {
    this._width = param;
  },
  get height() {
    return this._height;
  },
  set height(param) {
    this._height = param;
  },
  getAround: function () {
    return this.width * 2 + this.height * 2;
  },
  getArea: function () {
    return this.width * this.height;
  },
};

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log(
  '둘레 길이는 %d이고 넚이는 %d입니다',
  rect.getAround(),
  rect.getArea()
);

//문제3
class Student {
  constructor(){
  this._kor = null;
  this._eng = null;
  this._math = null;
  }
  set score(value1, value2, value3){
    if(!value){
        console.log("score을 입력하세요")
        return;
    }
    this._kor = value1;
    this._eng = value2;
    this._math = value3;
}
  get score(){
    return [this._kor, this._eng, this._math];
}
  sum() {
    return this._kor + this._eng + this._math;
  }
  avg(){
    return this.sum() / 3;
  }
};

console.group('반복문 안에서 객체 활용');
const grade = [
  ['철수', 92, 81, 77],
  ['영희', 72, 95, 98],
  ['민혁', 80, 86, 84],
];
for (const item of grade) {
  const s = new Student();
  console.log(
    '%s의 총점은 %d점이고 평균은 %d점 입니다',
    item[0],
    s.sum(),
    s.avg()
  );
}
console.groupEnd();

//문제 03
class Student(kor, eng, math){
  this._kor = kor;
  this._eng = eng;
  this._math = math;
}

sum(){
  return this._kor + this._ eng + this._math;
}
avg(){
  return this.sum() / 3;
}

const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const S3 = new Student(80, 86, 84);
console.log('철수의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('영희의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());
console.log('민혁의 총점은 %d점이고 평균은 %d점입니다', s1.sum(), s1.avg());

//문제 04
class Rectangle {
  constructor(){
    this._width = null;
    this._height = null;
  }
  get width(){
    return this._width;
  }
  set width(param){
    this._width = param;
  }
  get height(){
    return this._height;
  }
  set height(){
    this._height = param;
  }
  getAround(){
    return this.width *2 *this.height*2;
  }
  getArea(){
    return this.width * this.height;
  }
}
const rect = new Rectangle();
rect.width =10;
rect.height = 5;

console.log('둘레의 길이는 %d이고 넓이는 %d입니다', rect.getAround(), rect.getArea());