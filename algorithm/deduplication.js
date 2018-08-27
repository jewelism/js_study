const arr = [1,1,2,3];
const newArr = new Set(arr);
console.log(newArr.values());
console.log(Array.from(newArr)); //[1, 2, 3]