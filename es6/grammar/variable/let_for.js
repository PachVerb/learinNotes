const funcs = [];

for(let i = 0; i < 5; i++){
    funcs.push(function(){
        console.log(i)
    } );
}
//等同于
const funcs3 = [];
for(var j = 0; j < 4; j++){
    let i = j;
    funcs3.push(function(){
        console.log(i);
    });
}

funcs3.forEach(function(value){
    console.log(value(),1);
});
//对比头部得var i
const funcs2 = [];
for(var i = 0; i < 5; i++){
    funcs2.push(function(){
        console.log(i);
    })
    // setTimeout(() => {
    //     console.log(i)
    // },2000)  //异步表达，每次迭代 i= 5
}
//
funcs2.forEach(function(val){
    console.log(val(),2)    //i = 5
});
