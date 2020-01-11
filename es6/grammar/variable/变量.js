// let 
// const

// 特点：不可重复声明，劫持块，形成块级作用域。
// let可以修改，const声明一个常量，不可以修改

//js里作用域是基于函数级别得，得益于let,const出现，除了了函数作用域，现在又有了块级作用域。
// var a = 2;
// {
//     let a = 3;
//     console.log(a);
// }
//
// console.log(a); //内部a = 3无法访问

//显示块作用域
// let (a = 2, b, c){   //不支持
// //     console.log(a);
// // }


//TDZ临时死亡区
// {
//     console.log(a);
//     console.log(b);
//
//     var a= 2;
//     let b = 3;  //初始化前不能访问
// }

//TDZ声明和为申明
{
    //a未申明
    let a;
    if(typeof a === 'undefined'){
        console.log('变量a声明了')
    }
    //b 申明，但还处于TDZ。
    if(typeof(b) === 'undefined'){
        console.log('ok')
    }
    let b;
}




