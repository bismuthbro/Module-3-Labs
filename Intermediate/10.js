const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
const currentMinutes = today.getMinutes();
const totalMinutes = today.getHours() * 60 + currentMinutes + ' minutes have passed so far today'
console.log(totalMinutes)
const currentSeconds = today.getSeconds()
const totalSeconds = today.getHours() * 3600 + currentSeconds + ' seconds have passed so far today'
console.log(totalSeconds)

function daysInBetween(date1, date2) {
    const timeDiff = (date2 - date1);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
    return daysDiff;
  }

