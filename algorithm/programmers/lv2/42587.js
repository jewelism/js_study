function solution(priorities, location) {
  const arr = priorities.map((p, i)=> ({p, i}));
  let result = 0;
  while(arr.length) {
      const max = Math.max(...arr.map(a => a.p));
      const shifted = arr.shift();
      console.log(shifted, result);
      if(shifted.p < max){
          arr.push(shifted);
      } else {
          result++;
          if(location === shifted.i){
            console.log(location, shifted);
              return result;
          }
      }
      // console.log(shifted, max, arr, result);

  }
}

const result = solution([2, 1, 3, 2], 2);
console.log('result', result);
