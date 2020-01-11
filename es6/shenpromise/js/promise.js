function xPromise(x){
    return new Promise((res,rej) => {   //return promises
        setTimeout(function(){
            res(20);
        },20);
    });
};
console.log(xPromise());
//异步获取Y
function yPromise(y){
    return new Promise((res, rej) => {  //return promise
        setTimeout(function(){
            res(40);
        },4000);
    });
};

function add(xPromise,yPromise){
    return  Promise.all([xPromise,yPromise]).then(function(vals){
        let [a,b] = vals;
        return a + b;
    });
}
add(xPromise(), yPromise()).then(function(val){ //promise (value[o]+value[1])
    console.log(val);
}).then()  //这个promise用于异步对未来值追踪。
// console.log(add(xPromise(), yPromise()).then(function(val){ //promise (value[o]+value[1])
//     console.log(val);
// }).then(function(){}))  //一旦决议保持状态
// add(fetchX, fetchY, function(sum){
//     console.log(sum);
// });

//没有res or rejpromise决议初始状态为 pendding.



