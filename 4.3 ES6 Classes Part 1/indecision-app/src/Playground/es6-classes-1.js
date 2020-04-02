
// Setup constractor to take names and age (default to 0)
// getDescription - Stefan Roets is 33 year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGretting() {
      return `Hi. I am ${this.name}!`;
    }
    getDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }
  
  const me = new Person('Stefan Roets', 33);
  console.log(me.getDescription());
  
  const other = new Person();
  console.log(other.getDescription());
  