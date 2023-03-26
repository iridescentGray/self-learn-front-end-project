// 任意值（Any）用来表示允许赋值为任意类型,允许调用任何方法


// 普通类型，不允许赋值改变类型
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

//any 类型，则允许被赋值为任意类型
let anyThing: any = 1;
anyThing = 'hello';

console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any
let something;
something = 'seven';
something = 7;

//如果定义的时候赋值了，但没有制定类型，TypeScript 会推测出一个类型，这就是类型推论
let seven = 'seven';
//因为类型被推断为string，因此无法赋值为number
seven = 7;
