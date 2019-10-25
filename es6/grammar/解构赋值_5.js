//解构参数，函数形参和实参实际是隐士赋值

function foo([x,y]){
    console.log(x+y);
}

foo([1,2])  //3
foo([1])    //NaN , 1+ undefined
foo([]) //NaN undefined + undefined

//类比数组解构
function bar({x,y}) {
    console.log(x,y)
}
bar({x:1,y:2})  //1 2

//解构变体，默认值赋值，嵌套解构
function f3([x,y,...z], ...w){
    console.log(arguments);
    console.log(x,y,z,w)
}
f3([1,2,3,4],4,5);

//解构默认值+函数默认值
function foo({ x = 1 } = {}, { y } = { y:10 }){
    console.log(x,y)
}

foo()   // 1 10
foo({},undefined)   //1 10
foo( {},{} );   // 1 undefined
//出现bug,
//理由：第一个参数，不是解构据同名属性得到的值，第一个参数默认值本质是函数的默认值形式；而第二个参数就是解构得默认值。
//因此第二个传入 {}解构为undefined

//嵌套默认：解构并重组
//场景：为一个对象设置默认值
//假定：这里有一个实列对象，config,有一部分属性，但不全。为此设置默认值
let defaults = {
    options: {
        remove: true,
        enable: false,
        instance: null
    },
    log: {
        warn: true,
        error: true
    }
},
config = {
    options: {
        remove: false,
        instance: null
    },
    log: {
        warn: 1
    }
};
//原生实现
// config.options = config.options || {};  //检测是否存在属性 options，以及是否为空
// config.options.remove = (config.options.remove !== undefined) ?
//     config.options.remove : defaults.options.remove;
// config.options.enable = (config.options.enable !== undefined) ?
//     config.options.remove : defaults.options.remove;
// config.options.enable = (config.options.instance !== undefined) ?
//     config.options.remove : defaults.options.remove;
//
// config.log = config.log || {};  //检测是否存在属性 log，以及是否为空
// config.log.warn = (config.log.warn !== undefined) ?
//     config.log.warn : defaults.options.warn;
// config.log.error = (config.log.error !== undefined) ?
//     config.log.error : defaults.options.error;

// console.log(config);


// 这里只是对象浅赋值

//解构实现
// config.options = config.options || {};
// config.log = config.log || {};
// {
//     options: {
//         remove: config.options.remove = defaults.options.remove,
//         enable: config.options.enable = defaults.options.enable,
//         instance: config.options.instance =
//                         defaults.options.instance
//     } = {},
//     log: {
//         error: config.log.error = defaults.options.error,
//         warn: config.log.warn = defaults.log.warn
//     } = {}
// } = config;

//上面的方式有bug
{

    let {
        options: {
            remove = defaults.options.remove,
            enable = defaults.options.enable,
            instance = defaults.options.instance
        } = {},
        log: {
            error = defaults.log.error,
            warn = defaults.log.warn
        } = {}  //默认值
    } = config; //解构

    config = {
        options: {remove, enable, instance},
        log: {
            error,
            warn
        }
    }
}
console.log(config);









