//first自定义，用于最先决议的出来的promise
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

// if(!Promise.first){
//     Promise.first = function(prs){
//         return new Promise( function(resolve, reject){
//             //循环所有promise
//             prs.forEach( function(pr){
//                 Promise.resolve(pr)
//                 //决议最先完成的。这里根据promise决议不变性，可以推理出来其原理
//                 .then(resolve);
//             } )
//         } )
//     }
// }

// Promise.first([
//     request('http://localhost:5501/es6/shenpromise/data/ass.json'),   //最先决议出
//     request('http://localhost:5501/es6/shenpromise/data/b.json')
// ]).then((val) => {
//     console.log(val);
// });
// console.log(Promise.first([
//     request('http://localhost:5501/es6/shenpromise/data/a.json'),   //最先决议出
//     request('http://localhost:5501/es6/shenpromise/data/b.json')
// ]));


// //none
if(!Promise.none){
    Promise.none = function(prs){
        return new Promise( function(resolve, reject){
            //循环所有promise
            reject('rej');
        } )
    }
}

Promise.none([
    request('http://localhost:5501/es6/shenpromise/data/ass.json'),   //最先决议出
    request('http://localhost:5501/es6/shenpromise/data/b.json')
]).then(
    (val) => {
        console.log(val);
    },
    (e) => {
        console.log(e)
});