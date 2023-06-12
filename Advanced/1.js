
function makeCounter() {
let currentCount = 0;
return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

// a)
let counter2 = makeCounter();
counter2()
// creating a second independent counter works

// b)
function makeCounter(startFrom) {
    let currentCount = startFrom;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
let counter3 = makeCounter(3)
counter3()
counter3()


// c)
function makeCounter(incrementBy) {
    let currentCount = 0;
    return function() {
    currentCount += incrementBy;
    console.log(currentCount)
    return currentCount;
    };
    }
let counter4 = makeCounter(3)
counter4()
counter4()

