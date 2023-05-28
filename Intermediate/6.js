function unique(duplicatesArray) {
    var uniqueArray = [];
    for (i = 0; i < duplicatesArray.length; i++) {
      if (uniqueArray.indexOf(duplicatesArray[i]) === -1) {
        uniqueArray.push(duplicatesArray[i]);
      }
    }
    return uniqueArray;
  }
  const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
  const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
  console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
  console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
