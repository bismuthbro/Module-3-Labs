function capitalizeWords(string){
    let splitintoWords = string.split(" ");
    // split the string into an array of words
    let capitalizeFirstLetter = splitintoWords.map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    //create a new array where we replace the character at the first index of each string in the array with a capitalized version of that character
    let capitalizedString = capitalizeFirstLetter.join(" ");
    return capitalizedString;
    //join the array items back into a string and return it
}

console.log(capitalizeWords("my name is john"))