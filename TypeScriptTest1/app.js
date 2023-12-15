function sum(x, y) {
    return x + y;
}
;
function multiply(a, b) {
    return a * b;
}
;
function mathOp(x, y, op) {
    return op(x, y);
}
console.log(mathOp(10, 20, sum)); // 30 
console.log(mathOp(10, 20, multiply)); // 200
/*function sum(x: number, y: number): number {
    return x + y;
};
function subtract(a: number, b: number): number {
    return a - b;
};

let op: (x: number, y: number) => number;

op = sum;
console.log(op(2, 4));
op = subtract;
console.log(op(6, 4));*/
/*let decimal: number = 6;
// шестнадцатиричная система
let hex: number = 0xf00d;       // 61453 в десятичной
// двоичная система
let binary: number = 0b1010;    // 10 в десятичной
// восьмиричная система
let octal: number = 0o744;      // 484 в десятичной
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);*/ 
//# sourceMappingURL=app.js.map