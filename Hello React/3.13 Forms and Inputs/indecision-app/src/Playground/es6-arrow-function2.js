const add = (a, b) => {
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Stefan',
    cities: ['Vanderbijlpark', 'Cape Town', 'Houston'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());
  
  // Challenge area
  
  const multiplier = {
      // numbers - array of numbers
      // multiplyby - single number
      // multiply - return a new array where the number have been multiplied

    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, ,6]
  