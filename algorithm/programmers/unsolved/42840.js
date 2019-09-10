function solution(answers) {
  const giveUp = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const countList = new Array(giveUp.length).fill(0);

  function getAnswer(arr, index) {
    const { length } = arr;
    const idx = index;
    if (length <= index) {
      idx = index % length;
    }
    return arr[idx];
  }

  answers.forEach((answer, i) => {
    giveUp.forEach((gu, idx) => {
      if (getAnswer(gu, i) === answer) {
        countList[idx]++;
      }
    });
  });

  const max = Math.max(...countList);
  const result = [];
  countList.forEach((count, index) => {
    if (count === max) {
      result.push(index + 1);
    }
  });
  
  return result;
}