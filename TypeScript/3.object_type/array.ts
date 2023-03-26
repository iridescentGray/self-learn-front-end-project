//接口（Interfaces）是对行为的抽象.TypeScript 中的接口是一个非常灵活的概念
// 数组类型有多种定义方式，比较灵活。


//----------------------「类型 + 方括号」----------------------
let fibonacci: number[] = [1, 1, 2, 3, 5];
//当然会有类型检查和赋值检查
let fibonacci2: number[] = [1, '1', 2, 3, 5];
fibonacci2.push('8');


//----------------------「数组泛型]----------------------
let genericFibonacci: Array<number> = [1, 1, 2, 3, 5];


//----------------------[接口表示数组]----------------------
//不推荐
interface NumberArray {
    [index: number]: number;
}
let InterfacesFibonacci: NumberArray = [1, 1, 2, 3, 5];

//----------------------[任意类型数组]----------------------
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];


//----------------------[类数组]----------------------
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

//IArguments 是 TypeScript 定义好了的类型
function sum2() {
    let args: IArguments = arguments;
}

// IArguments是一个内置对象，它的的实际实现如下：
// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }
sum2.length
sum2.caller

