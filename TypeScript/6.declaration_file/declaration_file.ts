
/**
 * 声明文件可以用于声明/变量，声明类型，声明枚举，声明类，到处模块等
 * 声明文件必需以 .d.ts 为后缀，TypeScript会解析项目中所有的 .d.ts 文件，其他所有 *.ts 文件会受声明文件内容影响
 * 可以在tsconfig.json 中的 files、include 和 exclude配置解析路径
 * 
 */

/**
 * 推荐的项目结构
 *   /path/to/project
 *  ├── src
 *  |  └── index.ts
 *  ├── types
 *  |  └── foo
 *  |     └── index.d.ts
 *  └── tsconfig.json
 *  tsconfig.json 内容：
 *
 * {
 *    "compilerOptions": {
 *        "module": "commonjs",
 *        "baseUrl": "./",
 *        "paths": {
 *            "*": ["types/*"]
 *        }
 *    }
 * }
 */

/**
 * ----------------------语法----------------------
 * declare var/let/const 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 声明（含有子属性的）全局对象
 * declare global 扩展全局变量
 * declare module 扩展模块
 * interface 和 type 声明全局类型
 * 
 * export 导出变量
 * export namespace 导出（含有子属性的）对象
 * export default ES6 默认导出
 * export = commonjs 导出模块
 * export as namespace UMD 库声明全局变量
 * 
 * /// <reference /> 三斜线指令
 */


// types/foo/index.d.ts

//扩展global
declare global {
    interface String {
        prependHello(): string;
    }
}
export {};
//使用global的扩展
'bar'.prependHello();



/**
 * ----------------------参考链接----------------------
 * 公共维护的声明文件：https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
 * Jquery的声明文件：https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jquery/index.d.ts
 * 
 */
