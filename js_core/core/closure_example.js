
var counter = (function () {
  var privateCounter = 0
  function changeVal(val) {
    privateCounter += val
  }
  return {
    increase: function () {
      // changeVal(1)
      privateCounter++;
    },
    decrease: function () {
      // changeVal(-1)
      privateCounter--;
    },
    value: function () {
      return privateCounter
    }
  }
})()

console.log(counter.value())

counter.increase()
counter.increase()
console.log(counter.value())