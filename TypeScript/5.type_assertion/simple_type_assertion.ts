/**
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型，在编译期，保证后续调用类型安全
 */


/**
 * 语法如下: 
 * 
 * 值 as 类型  或   <类型>值
 */

//类型断言是为了解决————只能访问此联合类型的所有类型中共有属性/方法，这个问题
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    //无法访问非公共方法
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}


//在boolean判断时使用类型断言
function isFish2(animal: Cat | Fish): boolean {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
let catValue: Cat = {
    name: 'Tom',
    run() {
        return null;
    }
};

//类型断言可以用与方法调用时
catValue.run() as void;


/**
 * 
 * 类型断言只能够避免编译期错误，无法避免运行时的错误
 * 滥用类型断言会导致运行时错误
 * 下述代码会导致运行时错误
 */
function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}


