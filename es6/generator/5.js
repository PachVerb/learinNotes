//生成器异步并发使用 核心
function foo(cd){
    $.ajax({
        url:'http://localhost:5501/data/1.json',
        method: 'GET',
        dataType: 'json',
        cd
    })
}
foo((err, data) => {
    if(err){
        throw new Error(err);
    }else{
        console.log(data)
    }
})