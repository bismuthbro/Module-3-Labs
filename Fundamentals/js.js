function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age < 15 ? 'cannot drive':'can drive'
}
let ethan = new Person('Ethan',26)
let sebastian = new Person('Seb',24)

class PersonClass {
    constructor(name, age){
    this.name = name;
    this.age = age;
    this.human = this.age < 15 ? 'cannot drive':'can drive'
}
}

let mirza = new PersonClass('Mirza', 28)


console.log(sebastian)
console.log(ethan)
console.log(mirza)