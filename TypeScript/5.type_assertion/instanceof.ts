/**
 * instanceof 可以判断出子类
 * 但无法判断interface
 */

class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}
function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}


interface ApiErrorInterface extends Error {
    code: number;
}
interface HttpErrorInterface extends Error {
    statusCode: number;
}

//原因是接口是一个类型，在编译结果中会被删除（类似于Java的泛型） 此时就只能使用as判断
function isApiErroInterface(error: Error) {
    if (error instanceof ApiErrorInterface) {
        return true;
    }
    return false;
}



