// 联合类型（Union Types）,表示取值可以为多种类型中的一种。

let myFavoriteNumberAndStr: string | number;
myFavoriteNumberAndStr = 'seven';
myFavoriteNumberAndStr = 7;
//可以是两种，但不能是第三种
myFavoriteNumber = true;

//在联合类型被当作一种类型使用时，无法当作第二种类型被使用，编译会报错
let numberAndStr: string | number;
numberAndStr = 'seven';
console.log(numberAndStr.length); // 5
numberAndStr = 7;
console.log(numberAndStr.length); // 5

//使用联合类型时，只能访问此联合类型的所有类型里共有的属性或方法，否则会报错
function getLength(something: string | number): number {
    return something.length;
}