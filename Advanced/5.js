/*
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
    };
    car.description(); //works
    setTimeout(() => {
        car.description();
      }, 200);

carCopy = car
carCopy.year = 1986
*/

// a) In JavaScript, the value of this inside a function depends on how the function is called. When car.description() is called normally the 'this' parts inside the console log refer to the car object, when it is called within setTimeout it refers to something else.
// c) The delayed call uses the overidden values for carCopy because carCopy is a shallow copy of car and changing any of it's values also changes those of car's
// d)
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
  };
  
  car.description(); // Works
  
  setTimeout(car.description.bind(car), 200);

// e)
carCopy2 = car
carCopy2.model = "918 Spyder"