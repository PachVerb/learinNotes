var a = {
    val: [1, 2, 3],

    toJSON: function(){
        return this.val.slice(1);
    }
}
var b = {
    val: [1, 2, 3],
    toJSON: function(){
        return "[" + 
            this.val.slice(1).join() 
        + "]";
    }
}

console.log(JSON.stringify(a), JSON.stringify(b))

//JSON.stringify（obj[,parma1]/[,prama2][, prama3]）第一个参数是对象，用于指定序列化对象。其次参数，如果为数组。顺组值是一个字符串数组，用于指定需要序列化对象属性名。如果为函数，函数参数为 对象建值，如果需要某个值，函数返回undefined，否则返回原来值。prama3用于指定缩进
//列子
var obj = {
    b: 32,
    c: "32",
    d: [1, 2, 3]
};

console.log(JSON.stringify(obj, ["b", "d"], 3))

console.log(JSON.stringify(obj, function(k, v){
    if(k == "c"){ 
        return undefined
    }else{
        console.log(k)  //字符串化的递归
        return v
    }
}, '------'))



