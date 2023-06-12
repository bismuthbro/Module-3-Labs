function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    }
    Person.prototype.toString = function() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
      };
    const person1 = new Person('James Brown', 73, 'male')
    const person2 = new Person('Michael Jordan', 60, 'male')
    console.log('person1: '+ person1)
    console.log('person2: ' + person2)
    function Student(name, age, gender, cohort) {
        Person.call(this, name, age, gender); 
        this.cohort = cohort;
      }
      Student.prototype.toString = function() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
      };
      const student1 = new Student('Ethan Lovelock', 27, 'male', '2023 IOD');
      const student2 = new Student('Jackmerius Tacktheritrix', 25, 'male', 'Michigan State University')
      console.log('student1: ' +student1)
      console.log('student2: ' +student2)