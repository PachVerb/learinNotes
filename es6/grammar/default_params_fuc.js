//函数设置默认参数,但我们不设置参数,或者说什么都不做,程序默认设定,
// function foo(x, y){
//     x = x || 11;
//     y= y || 31;
//
//     console.log(x + y);
// }

//bug
//如果传入参数一个是假值.

// foo(0 ,42);     //53; 不是 42

//分析程序实现思路,使我们省略参数是,才使用默认参数,实现两数和

//不传入值,我们可以这样考虑 用undefined
//那么
function foo(x, y){
    x = (x !== undefined)? x : 11;
    y= (y !== undefined)? y : 31;

    console.log(x + y);
}
foo(0, 42); //解决了
foo(42);
//不过 undefined还可以表示值,除非指定传入 undefinded,否则也算做bug

//该进,arguments内部检测是否传入参数,;存在参数,存在个数
// function foo(x,y){
//     x = (0 in arguments)? x : 11;
//     y = (1 in arguments)? y : 31;
//
//     console.log(x + y);
// }
// foo(0,42);
// foo(undefined,42);
foo(42);



