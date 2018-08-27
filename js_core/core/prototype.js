function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;
var kim  = new Person();
var park = new Person();
console.log(kim.eyes); // => 2


Person.prototype.eyes = 3;

console.log(kim.__proto__);
Person.prototype.eyes = 4;
console.log(kim.__proto__);
console.log(Person.prototype);