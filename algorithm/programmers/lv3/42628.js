function solution(operations) {
  const result = [];
  operations.forEach(operation => {
    const [op, value] = operation.split(' ');
    const v = Number(value);
    if (op === 'D') {
      if (v === 1) {
        const max = Math.max(...result);
        const index = result.findIndex(el => el === max);
        result.splice(index, 1);
      } else {
        const min = Math.min(...result);
        const index = result.findIndex(el => el === min);
        result.splice(index, 1);
      }
    } else {
      result.push(v);
    }
  });

  return result.length ? [Math.max(...result), Math.min(...result)] : [0, 0];
}

const r1 = solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
const r2 = solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]);

console.log(r1, r2);
