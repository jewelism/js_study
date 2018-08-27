function sleep(delay) {
  var start = Date.now();
  while (Date.now() < start + delay);
}
console.log(0);
setTimeout(()=>{
  console.log(2);
  sleep(1000);
  console.log(3);
}, 0);
sleep(3000);
console.log(1);