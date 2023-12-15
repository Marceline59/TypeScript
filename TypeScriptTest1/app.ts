

class User {

    name: string;
    age: number;
    print() {
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
    toString(): string {
        return `${this.name}: ${this.age}`;
    }
}

let tom = new User();
tom.name = "Tom";
tom.age = 36;
tom.print();                    // name: Tom  age: 36
console.log(tom.toString());    // Tom: 36

/*enum DayTime {
    Morning,
    Evening
};
function welcome(dayTime: DayTime) {

    if (dayTime === DayTime.Morning) {
        console.log("Доброе утро");
    }
    else {
        console.log("Добрый вечер");
    }
}
let current: DayTime = DayTime.Morning;
welcome(current);
welcome(DayTime.Evening);*/

/*function addNumbers(firstNumber: number, ...numberArray: number[]): number {

    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}
let num1 = addNumbers(3, 7, 8);
console.log(num1);
let num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2);*/

/*function printMarks(marks: [string, ...number[]]) {

    for (const mark of marks) {
        console.log(mark);
    }
}
let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ["Physics", 5, 5, 5];
printMarks(math);
printMarks(physics);*/

/*let user: [string, number] = ["Tom", 36];
for (const prop of user) {
    console.log(prop);
}*/

/*const people: string[] = ["Tom", "Bob", "Sam"];
const [first, second, third] = people;
console.log(first);
console.log(second);
console.log(third);*/

/*let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);*/

/*type Person = { name: string; age: number };

let tom: Person = { name: "Tom", age: 36 };
let bob: Person = { name: "Bob", age: 41 };

function printPerson(user: Person) {
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}

printPerson(tom);
printPerson(bob);*/

/*let tom: { name: string; age?: number } = { name: "Tom", age: 23 };
let bob: { name: string; age?: number } = { name: "Bob" };


function printUser(user: { name: string; age?: number }) {

    if ("age" in user) {
        console.log(`Name: ${user.name} Age: ${user.age}`);
    }
    else {
        console.log(`Name: ${user.name}`);
    }
}
printUser(tom);
printUser(bob);*/

/*function printUser(user: { name: string; age: number }) {
    console.log(`name: ${user.name}  age: ${user.age}`);
}
let tom = { age: 36, name: "Tom" };

printUser(tom);*/

/*let person: { name: string; age?: number };

person = { name: "Tom", age: 23 };
console.log(person.name);
person = { name: "Bob" };
console.log(person.name);*/

/*const sum = (x: number, y: number) => {
    x *= 2;
    return x + y;
};

const result = sum(15, 35); // 65
console.log(result);*/

/*const square = x => x * x;
const hello = () => "hello world"

console.log(square(5));
console.log(hello());*/

/*function sum(x: number, y: number): number {
    return x + y;
};
function multiply(a: number, b: number): number {
    return a * b;
};

function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {

    return op(x, y);
}
console.log(mathOp(10, 20, sum)); 
console.log(mathOp(10, 20, multiply));*/

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
