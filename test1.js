for(let i=0; i<128; i++){
  console.log(String.fromCharCode(i));
}

// function somePromise() {
//   return new Promise(resolve => {
//     resolve('value');
//   });
// }

// // while (true) {
// //   somePromise()
// //     .then(console.log);
// // }

// function some(a) {
//   a.name = 'boseok';
// }

// const a = { name: '보석', age: 1 };
// some(a); //메모리의 주소값을 넘겼으므로
// console.log(a); //name이 boseok으로 바뀐다.

// function s(a){
//   a = 1;
//   console.log('함수 실행됨');
// }

// var b = 2;
// s(b); //메모리에 값이 할당되므로, 값을 넘겼을뿐

// console.log(b);

// console.log(typeof new Number(1));

// console.log(new Number(1)===1);

// const one = new Number(1);
// const two = 2;
// const three = one + two;
// console.log(three, typeof three);