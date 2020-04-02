var nameVar = 'Stefan';
var nameVar = 'Anton';
console.log('namevar',nameVar);

let nameLet = 'Frikkie';
nameLet = 'Frankie';
console.log('nameLet', nameLet);

const nameConst = 'Koos';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Frikkie van der Merwe';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName); 
}

console.log(firstName);