/* part A
function truncate(string,maxchars) {
    if (string.length <= maxchars){
        return string
    };
    let truncatedString = string.substring(0, maxchars) + "...";
    return truncatedString
};
console.log(truncate("this is a very very very very long string", 3))
*/

//part b

function truncate(string,maxchars) {
    return string.length <= maxchars ? string : string.substring(0, maxchars) + "..."
}
console.log(truncate("this is a very very very very long string", 3))