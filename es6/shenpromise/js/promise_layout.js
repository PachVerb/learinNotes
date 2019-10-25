// //all([...])

// var p1 = new Promise((res,rej) => {
//     res(1);
// });

// var p2 = new Promise((res, rej) => {
//     res(2);
// });

// Promise.all([p1,p2]).then((val) => {
//     // console.log(val);   //arr, [1,2]
// });

// //传入promise立即值
// console.log(Promise.all([p1,p2]),2);

// //传入空值
// console.log(Promise.all([]),1);    //主prommise立即完成


//race([...]) 只返回第一个决议的promise
function request(url){
   return new Promise((res,rej) => {
        $.ajax({
            url,
            method:'get',
            dataType:'json',
            success: (data) => {
                res(data);
            },
            err:function(e){
                throw e;
            }
        });
    })
}

var p1 = request('http://localhost:5501/es6/shenpromise/data/a.json');
// var p2 = request('https://www.google.com');

// Promise.race([p1,p2]).then((val) => {
//     console.log(val);   //完成值是单个值，不在是all的数组。
// })

//超时模式
function foo(){
    
}
function timeoutPromise(delay){
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej('Timeout');
        }, delay);
    });
}

Promise.race([
    request('http://localhost:5501/es6/shenpromise/data/a.jso'),
    timeoutPromise(3000)
]).then((val) => {
    console.log(val);
});

//foo因超时，导致的未处理候补





