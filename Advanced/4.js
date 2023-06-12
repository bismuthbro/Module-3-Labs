// a)

function printFibonacci(){
    let fibonacci1 = 0
    let fibonacci2 = 1
    console.log(fibonacci1)
    setInterval(() => {
        console.log(fibonacci2)
        const nextNumber = fibonacci1 + fibonacci2
        fibonacci1 = fibonacci2
        fibonacci2 = nextNumber
    }, 1000)
}
printFibonacci()
 
// b)

function printFibonacci() {
    let fibonacci1 = 0
    let fibonacci2 = 1
    console.log(fibonacci1)
    function fibonacciInterval() {
        setTimeout(() => {
        console.log(fibonacci2)
        const nextNumber = fibonacci1 + fibonacci2
        fibonacci1 = fibonacci2
        fibonacci2 = nextNumber
        fibonacciInterval()  
    }, 1000)
}
fibonacciInterval()
}

printFibonacci()


// c)

function printFibonacci(limit) {
    let fibonacci1 = 0
    let fibonacci2 = 1
    let i = 1
    console.log(fibonacci1)
    function fibonacciInterval() {
        setTimeout(() => {
        console.log(fibonacci2)
        const nextNumber = fibonacci1 + fibonacci2
        fibonacci1 = fibonacci2
        fibonacci2 = nextNumber
        i++
        if(i <= limit){
            fibonacciInterval()
        }
    }, 1000)
}
fibonacciInterval()
}

printFibonacci(10)