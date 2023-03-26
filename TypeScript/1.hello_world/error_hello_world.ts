function errorSayHello(person: string) {
    return 'Hello, ' + person;
}

let errorUser = [0, 1, 2];
console.log(errorSayHello(errorUser));

//// 使用命令：error_hello_world.ts 编译此文件
//当类型错误时，在编辑器中会提示错误，编译的时候也会出错

