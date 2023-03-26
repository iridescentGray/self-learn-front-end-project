//接口（Interfaces）是对行为的抽象.TypeScript 中的接口是一个非常灵活的概念
//除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

//定义的变量比接口多/少了一些属性是不允许的，必须一模一样
let XiaoMing: Person = {
    name: 'XiaoMing'
};


//----------------------可选属性--------------------------------
//我们希望不要完全匹配一个形状，那么可以用可选属性： 
interface OptionalPerson {
    name: string;
    age?: number;    //可选属性
}

//可以不定义age
let XiaoHong: OptionalPerson = {
    name: 'XiaoHong'
};

//但不能多定义
let XiaoBai: OptionalPerson = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

//----------------------任意属性--------------------------------
//任意属性限定了任意属性必须是它的类型的子集，这里用Any代表可以用任何属性
interface ArbitrarilyPerson {
    name: string;
    [propName: string]: any;
}

let XiaoZhou: ArbitrarilyPerson = {
    name: 'ArbitrarilyPerson',
    gender: 'male',
    son: 'son'
};


//----------------------只读属性--------------------------------
//希望一些字段只能在创建的时候被赋值，可以用 readonly 定义只读属性
interface ReadonlyPerson {
    readonly id: number;
    name: string;
}

let XaoZi: ReadonlyPerson = {
    id: 89757,
    name: 'Tom',
};

XaoZi.id = 9527;