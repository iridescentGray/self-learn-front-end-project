//函数

//--------------------------------限定函数的入参和返回值--------------------------------
function sum(x: number, y: number): number {
    return x + y;
}

//校验函数的参数是否合法
sum(1, 2, 3);

// TypeScript 中的 => 和 ES6 中的 =>含义完全不同
//在 TypeScript中，=> 用来表示函数定义，箭头左边是函数的输入类型，右边是输出类型
//上面的sum()方法的左半边其实没有定义，是通过类型推论而推断出来的
let mySum: (x: number, y: number) => number = function (x: number, y: number) {
    return x + y;
};

let mySumFuncResult = mySum(1, 2)


//--------------------------------用接口定义函数的形状--------------------------------
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
//函数表达式|接口定义函数，都能对函数的左侧进行类型限制
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}

let mySearchResult = mySearch("123", "2")

//--------------------------------可选参数--------------------------------
//用 ? 表示可选的参数
//可选参数必须接在必需参数后面,类似python
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let buildNameResult1 = buildName('Tom', 'Cat');
let buildNameResult2 = buildName('Tom');


//--------------------------------参数默认值--------------------------------
//默认参数没有像可选参数那样的限制
function defaultsBuildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let defaultsBuildName1 = defaultsBuildName('Tom', 'Cat');
let defaultsBuildName2 = defaultsBuildName('Tom');


//--------------------------------可变参数--------------------------------
//可变参数只能是最后一个参数
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);

//--------------------------------重载--------------------------------
//允许一个函数接受不同数量或类型的参数时，作出不同的处理

//重载和Java的语法有所不同，仅仅是参数签名不同会报错
function overloading(x: number): number {
    return x;
};
function overloading(x: string): string {
    return x;
};

//正确语法，需要提供一个兼容重载方法的函数
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return reverse(x);
    } else if (typeof x === 'string') {
        return reverse(x);
    }
}
