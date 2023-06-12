
Function.prototype.delay = function(ms){
    const originalFunction = this
    return function(...args){
        setTimeout(() =>{
            originalFunction.apply(this, args)
        }, ms)
    }    
}

function multiply(a, b, c, d) {
    console.log( a * b * c * d);
    }
    multiply.delay(500)(5, 5, 5, 5); // prints 25 after 500 milliseconds