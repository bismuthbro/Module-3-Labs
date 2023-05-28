/*
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) 

a) because toFixed returns a string and not a number so the strings are concatenated 

*/

// b)

function currencyAddition(float1, float2) {
    let result = (float1 + float2).toFixed(2)
    return result
}

console.log(currencyAddition(34.12,23.11))
// c)
function currencyOperation(float1,float2,operation){
    var result;
    switch(operation){
        case "+":
            result = (float1 + float2).toFixed(2);
            break;
        case "-":
            result = (float1 - float2).toFixed(2);
            break;
        case "*":
            result = (float1 * float2).toFixed(2);
            break;
        case "/":
            result = (float1 / float2).toFixed(2);
            break;
        default:
            return "Invalid Operation";
    }
    return parseFloat(result);
}
console.log(currencyOperation(32.11,12.54,"*"))

// d)
function currencyOperation(float1,float2,operation,decimals){
    var result;
    switch(operation){
        case "+":
            result = (float1 + float2).toFixed(decimals);
            break;
        case "-":
            result = (float1 - float2).toFixed(decimals);
            break;
        case "*":
            result = (float1 * float2).toFixed(decimals);
            break;
        case "/":
            result = (float1 / float2).toFixed(decimals);
            break;
        default:
            return "Invalid Operation";
    }
    return parseFloat(result);
}