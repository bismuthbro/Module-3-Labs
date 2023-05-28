const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Gorilla','Condor')
console.log(animals)

animals.unshift('Rhinoceros','Capybara')
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue){
    animals[animals.length / 2] = newValue
    return animals
}
console.log(replaceMiddleAnimal('Crocodile'))

function findMatchingAnimals(beginsWith){
    let matchingAnimals = animals.filter(function(animal){
        return animal.charAt(0).toLowerCase() === beginsWith.toLowerCase()
    });
return matchingAnimals
}

console.log(findMatchingAnimals("G"))