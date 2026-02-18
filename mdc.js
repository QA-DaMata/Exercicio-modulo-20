//Calcule o MDC (máximo divisor comum) entre dois números.
let mdc = (num1, num2) => {
    let r = num2 % num1
   while (r !== 0) {
    var n = num2 % num1
    r = n 
    num2 = num1 
    num1 = r
   }
    return num2
}

console.log(mdc(12, 40));
module.exports = { mdc }