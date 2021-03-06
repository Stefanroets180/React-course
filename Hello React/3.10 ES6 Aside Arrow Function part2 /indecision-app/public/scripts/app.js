'use strict';

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

var user = {
  name: 'Stefan',
  cities: ['Vanderbijlpark', 'Cape Town', 'Houston'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  // numbers - array of numbers
  // multiplyby - single number
  // multiply - return a new array where the number have been multiplied

  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, ,6]
