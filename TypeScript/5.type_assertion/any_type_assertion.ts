
/**
 * 语法：值 as any 
 * any 是最松懈的类型推断
 * 提供了TypeScripte的灵活性
 * 滥用any会导致掩盖了真正的类型错误
 */


//需要将 window 上添加一个属性 foo是不可行的
window.foo = 1;
//使用any即可解决
(window as any).foo = 1;


/**
 * 双重断言
 * 因为任何类型都可以被断言为 any，且any 可以被断言为任何类型
 * 所以 可以使用双重断言 value as any as value 
 * 除非迫不得已，千万别用双重断言。
 */
interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat(cat: Cat) {
    return (cat as any as Fish);
}


