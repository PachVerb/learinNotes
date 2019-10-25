function request(url){
    return new Promise((res,rej) => {
         $.ajax({
             url,
             method:'get',
             dataType:'json',
             success: (data) => {
                 var a = 1;
                 a.toLocaleString;
                 res(data);
             },
             err:function(e){
                 throw e;
             }
         });
     })
};

function timeoutPromise(delay){
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej('Timeout');
        }, delay);
    });
}

if(!Promise.observe){
    Promise.observe = function(pr,cd) {
    
        pr.then((msg) => {
            //成功异步job
            Promise.resolve(msg).then(cd)   //cd回调查看pr决议状态
        },(err) => {
            //失败异步job
            Promise.resolve(err).then(cd)
        });
        return pr;  
    }
    
}

Promise.race([
    Promise.observe(
        request('http://localhost:5501/es6/shenpromise/data/a.json'),
        function cleanup(msg){
            console.log(msg);
        }
    ),
    timeoutPromise(0)
]).then((val) => {
    console.log(val);
},(err) =>{
    console.log(err);
});

//这里算是对request内部监听，如果request内部有重要资源，那么由race机制。就会被忽略，而这里我对request
//进行回调处理，既是出错也会监听到。
//如上，我对数字a.toLowerString因此出错，但是数据照常打印出来。
