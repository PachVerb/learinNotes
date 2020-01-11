//polyfill 为新环境定义在旧环境下的等价行为
//比如 Object.is, 实现
//判断两值是否严格相等
if (!Object.is) {   //外层if 用于不覆盖es api
    Object.is = function(v1, v2){
        //检查 -0, -0 ===  0 // true
        if(v1 === 0 && v2 === 0){
            return 1 / v1 ===  1 /v2;
        }
        //检查NaN
        if(v1 !== v1){
            return v2 != v2;
        }
        //其他情况
        return v1 === v2;
    }
}

// ===处理 NaN ,0
console.log(NaN === -0);    //false
//is API
var a = Object.is(-0,-0);
console.log(a); //false

