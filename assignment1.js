const argType = element1 => typeof(element1)

console.log(argType('2'))


function numReverse(element2) {
    t0 = element2 + "";
    t0 = t0.split("").reverse().join("");
    return (parseFloat(t0) * Math.sign(element2))  
}

console.log(numReverse(15.88760))


const returnName = function () {
    return returnName.name;
}

console.log(returnName())


function printHello () {
    return ("Hello" + " World");
}

const exeFunc = function (func) {
    console.log(func);
}

exeFunc(printHello())


// write a function that accepts an array and returns the min/max number
// write a function that returns all the prime numbers in the array
// write a function that returns all the even/odd numbers