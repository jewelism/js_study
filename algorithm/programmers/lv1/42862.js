function solution(n, lost, reserve) {
  const re = reserve.filter(x => lost.indexOf(x) === -1);
  const lo = lost.filter(x => reserve.indexOf(x) === -1);
  re.forEach(r => {
    const index = lo.findIndex(el => Math.abs(el - r) < 2);
    if (index !== -1) {
      lo.splice(index, 1);
    }
  });
  return n - lo.length;
}

// console.log(solution(3, [3], [1])); //2
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6])); //6