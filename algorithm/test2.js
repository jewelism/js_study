var input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

console.log(input)

const W = 14;
const N = 2;

const weight = [];
const count = [];
const resultCnt = [0, 0, 0];
for (let i = 0; i < N; i++) {
  const tmpArr = input[i].split(' ');
  weight.push(tmpArr[0]);
  count.push(tmpArr[1]);
}
console.log(weight)
console.log(count)

const caseSet = new Set();

function getCaseSet(){
  for(const item of weight){
    caseSet.add(parseInt(item))
  }
  for(let i=0; i<count.length; i++){
    count[i]
  }
}

getCaseSet();
console.log(caseSet);
// function calculate() {
//   let rest = W;
//   for (let i = N; i >= 0; i--) {
//     while (W >= weight[i] && count[i] > 0) {
//       count[i]--;
//       resultCnt[i]++;
//       rest -= weight[i];
//     }
//   }
//   return rest
// }

// // 7 2
// // 10 1
// console.log(`rest:${rest}`)
// console.log(`weight:${weight}`)
// console.log(`count:${count}`)

// if (rest === 0) {
//   for (let i = 0; i < N; i++) {
//     console.log(weight[i], resultCnt[i])
//   }
// } else {
//   console.log("FAIL")
// }
