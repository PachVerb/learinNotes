//布尔值到数字隐式类型转化。
function olnyOne(a, b, c){
    return !!((a && !b && !c) || (!a && b && !c) || (!a && !b && c)) 
}
var a = true;
var b = false;

console.log(olnyOne(a, b, b));
console.log(olnyOne(b, a, b));

console.log(olnyOne(a, b, a));

// 
function onlyOne(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        if(arguments[i]){
            sum += arguments[i];
        }
    }
    return sum == 1;
}
console.log(onlyOne(a, b))  //true
console.log(onlyOne(a, b, b, b))    //true
console.log(onlyOne(a, b, b, a))    //false

//显示boolean类型转换
console.log("-------")
function onlyOne(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += Number(!!arguments[i]);
    }
    return sum == 1;
}
console.log(onlyOne(a, b))  //true
console.log(onlyOne(a, b, b, a))    //false

