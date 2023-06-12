// a / b / c)
function debounce(func, ms) {
    let timeoutId;
    
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  }


function printMe(msg) {
    console.log(`printing debounced message ${msg}`)
    }
    printMe = debounce(printMe, 2000);
    setTimeout( printMe('first message'), 100);
    setTimeout( printMe('second message'), 200);
    setTimeout( printMe('third message'), 300);



