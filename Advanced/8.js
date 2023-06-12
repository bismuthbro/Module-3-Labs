
/*
class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    const myClock = new DigitalClock('my clock:')

// a)

class PrecisionClock {
    constructor(prefix, precision) {
    this.prefix = prefix;
    this.precision = precision
    }
    display() {
    let date = new Date();
    let [hours, mins, secs, milliseconds] = [date.getHours(), date.getMinutes(),
    date.getSeconds(), date.getMilliseconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    if (this.precision == null) this.precision = 1000
    if (milliseconds < 1000) milliseconds = '0' + milliseconds
    console.log(`${this.prefix} ${hours}:${mins}:${secs}:${milliseconds}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
    }
    }
    const preciseClock = new PrecisionClock('Precision Clock:')
    preciseClock.start()
*/
// b)

class AlarmClock {
    constructor(prefix, wakeupTime) {
    this.prefix = prefix;
    this.wakeupTime = wakeupTime
    }
    display() {
    let date = new Date();
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    if (this.wakeupTime == null) this.wakeupTime = '07:00'
    if (hours == (this.wakeupTime.charAt(0) + this.wakeupTime.charAt(1)) && mins == (this.wakeupTime.charAt(5) + this.wakeupTime.charAt(6))) return this.stop()
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    console.log('Wake Up!')
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    const alarmClock = new AlarmClock('Alarm Clock:', '20:41')
    alarmClock.start()

// couldn't quite get this to work will ask for help on it

