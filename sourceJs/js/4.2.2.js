//toNumber抽象操作实现数字强制类型转换。
//这里再次谈到对象值类型的转换。 
//这里假定Number实现此功能了。
var a = {
    valueOf: function(){
        return '42'
    }
};

var b = {
    toString: function(){
        return '42';
    }
};

var c = [4, 2];
c.toString = function(){
    return this.join("");
};

console.log(Number(a));
console.log(Number(b));
console.log(Number(c));

//假值强制类型转化为false
console.log(Number(""));
console.log(Number([]));
//无法转换为 nAn
console.log(Number(["abc"]));


