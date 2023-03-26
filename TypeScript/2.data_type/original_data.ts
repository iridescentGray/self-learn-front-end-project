// JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。
// 本节主要介绍前五种原始数据类型在 TypeScript 中的应用。


//----------------boolean----------------
//在 TypeScript 中，使用 boolean 定义布尔值类型
let isDone: boolean = false;

// 事实上 new Boolean() 返回的是一个 Boolean 对象：
let createdByNewBoolean: Boolean = new Boolean(1);

// 直接调用 Boolean 也可以返回一个 boolean 类型：
let createdByBoolean: boolean = Boolean(1);


//----------------number----------------
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法，会被编译为十进制数字
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法，会被编译为十进制数字
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


//----------------string----------------
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


//----------------空值----------------
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的
function alertName(): void {
    alert('My name is Tom');
}

//声明一个 void 类型的变量时，你只能将它赋值为 undefined 和 null
let unusable: void = undefined;


// ----------------Null 和 Undefined----------------
//undefined 和 null 不能赋值给 number 类型的变量
let u: undefined;
let num2: number = u;
let u2: undefined = undefined;

let n: null = null;
let n2: null = u;