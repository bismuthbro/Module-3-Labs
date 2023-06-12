function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000;
        setTimeout(() =>{
        if(delay % 2 === 0) {
            resolve();
        } else {
            reject(new Error('Delay Failed'))
        }
        }, delay)
    });
    }
    randomDelay()
    .then(() => console.log('There appears to have been a delay.'))
    .catch((error) => console.log('There was an error: ' + error.message))
