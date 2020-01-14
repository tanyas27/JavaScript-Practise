/* Create a constructor function Calculator that creates “extendable” calculator objects.
 The task consists of two parts.
 First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and 
 returns the result. Should understand plus + and minus -. 
 Secondly, add the method addMethod(name, func) that teaches the calculator a new operation.
  It takes the operator name and the two-argument function func(a,b) that implements it.
*/
function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let arg =str.split(" "),
        a = +arg[0],
        op = arg[1],
        b = +arg[2]
        if(!this.methods[op] || isNaN(a) || isNaN(b))
         return NaN ;
        
        return this.methods[op](a,b); 
    };
    this.addMethod = function (op, func){
        this.methods[op] = func ;
    };

} 
let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8