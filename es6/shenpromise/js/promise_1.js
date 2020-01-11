// 反控制反转，最终结果交给事件
function foo(){
    $.ajax({
        url:'https://localhost:5501/data/a.json',
        type:'get',
        dataType:'json',
        success: function(data) {
            console.log(data)
        },
        error: function(){
    
        }
    });

    return new Promise(function(res,rej){
        rej();
    });
};

function bar(fooPromise){
    fooPromise.then()

}


