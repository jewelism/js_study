const Rx = require('rxjs');

// var numbers = Rx.Observable.interval(1000);
// numbers.subscribe(x => console.log(x));

Rx.Observable.debounce(() => Rx.Observable.interval(1000));
result.subscribe(x => console.log(x));