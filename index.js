let cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const copyCats = [...cats];  // Create a copy of the original array
    copyCats.push(name);         // Append the new cat to the copied array
    return copyCats;             // Return the new array
}
function  prependCat(name){
    const copyCats = [...cats];  // Create a copy of the original array
    copyCats.unshift(name);         // Append the new cat to the copied array
    return copyCats;
    
}
function removeLastCat(){
    const copyCats = [...cats];  // Create a copy of the original array
    copyCats.pop();         // Append the new cat to the copied array
    return copyCats;

}
function removeFirstCat(){
    const copyCats = [...cats];  // Create a copy of the original array
    copyCats.shift();         // Append the new cat to the copied array
    return copyCats;

}