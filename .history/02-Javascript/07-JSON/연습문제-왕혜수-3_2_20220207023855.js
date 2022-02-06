const covid19 = [
  { date: '0125', active: 426 },
  { date: '0126', active: 343 },
  { date: '0127', active: 547 },
  { date: '0128', active: 490 },
  { date: '0129', active: 460 },
  { date: '0130', active: 443 },
  { date: '0131', active: 338 },
  { date: '0201', active: 299 },
];
// let sum = 0;
// let avg = 0;
// for(let i = 0; i<covid19.length;i++){
//     sum+=covid19[i].active;
//     }avg=sum/covid19.length;
//     console.log(`누적 확진자 수: ${sum} 평균 확진자 수: ${avg}`)

let max_active = covid19[0].active;
let max = {};
for (let i = 0; i < covid19.length; i++) {
  if (max_active < covid19[i].active) {
    max_active = covid19[i].active;
    max = covid19[i];
  }
}
console.log(`확진자가 가장 많이 나타난 날: ${max.date}`);
