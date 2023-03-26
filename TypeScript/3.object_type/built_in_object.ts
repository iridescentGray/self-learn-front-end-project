// JavaScript 中有很多内置对象可以直接在 TypeScript 使用
//TypeScript核心库的定义文件:  https://github.com/Microsoft/TypeScript/tree/main/src/lib

//----------------------ECMAScript 标准提供的内置对象----------------------
//更多的内置对象参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

//----------------------DOM 和 BOM 的内置对象----------------------
//Document、HTMLElement、Event、NodeList 等
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
});

//----------------------TypeScript 核心库----------------------
//这里报错，是因为TypeScript提供的Math库提供了校验
Math.pow(10, '2');