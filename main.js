//Write a function called add7 that takes one number and returns that number + 7.

const add7 = (num) => num + 7;

const result1 = add7(4)
console.log(result1);

//Write a function called multiply that takes 2 numbers and returns their product.

const multiply = (a, b) => a * b;

const result2 = multiply(7, 7)
console.log(result2);

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized.
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

const capitalizeFirstLetter = (str) => {

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalized
}
const result3 = capitalizeFirstLetter("mint")
console.log(result3);

//Write a function called lastLetter that takes a string and returns the very last letter of that string:

const lastLetter = (str2) => {
    const last = str2.slice(-1);
    return last
}

const result4 = lastLetter("abcd")
console.log(result4)