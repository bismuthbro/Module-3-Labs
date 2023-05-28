function camelCase(cssProp){
    let unDashed = cssProp.split("-")
    unDashed = unDashed.map(function(propPart, index){
        if (index === 0){
            return propPart
        } else {
            return propPart.charAt(0).toUpperCase() + propPart.slice(1)
        }
    })
    return unDashed.join("")
}

console.log(camelCase("margin-left"))