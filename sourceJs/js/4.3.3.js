//显示转换·为boolean值
//显示的将值进行布尔值转化
//方式
//Boolean(x) 住：不需要new
//!!x 常用


//JSON序列化时，将符合条件值转化为boolean值。
var a = [
    1, 
    function(){},
    2,
    function(){

    }
]
console.log(JSON.stringify(a))  //"[1, null, 2, null]"

var b = JSON.stringify(a, function(key, val){
    if(typeof val == 'function'){
        return !!val;
    }else{
        return val;
    }
})
console.log(b)  //"[1, true, true]"
