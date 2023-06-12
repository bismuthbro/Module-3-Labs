function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

/* 
a)
the four tests print in the reverse order they are written above due to setTimeout
*/

// b)
delayMsg = (msg) =>
{
console.log(`This message will be printed after a delay: ${msg}`)
}


// c)

setTimeout(delayMsg, 20000, '#4 this messaged is very delayed')

// d)
setTimeout(clearTimeout, 500)
