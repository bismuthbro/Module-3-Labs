const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//console.log(phoneBookABC)

const phoneBookDEF = new Map()
phoneBookDEF.set('David','012371273')
phoneBookDEF.set('Edward','190237129')
phoneBookDEF.set('Francesca','12083128')

phoneBookABC.delete('Caroline');
phoneBookABC.set('Caroline','newphonenumber')

//console.log(phoneBookABC)

function printPhoneBooks(map){
    console.log(map)
}

//console.log(printPhoneBooks(phoneBookABC))

const phoneBook = new Map([...phoneBookABC,...phoneBookDEF])
console.log(phoneBook)