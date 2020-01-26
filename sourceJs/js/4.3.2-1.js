console.log(1/0)    // infinity
console.log(parseInt(1/0, 19))  //18

//半显示，半隐式 parseInt
var a = {
    num: 21,
    toString(){
        return String( this.num * 2 )
    }
}
console.log("---------")
console.log(parseInt(a)) // 42

console.log(parseInt(0.000008));   //0
console.log(parseInt(0.0000008));   // 
console.log(parseInt(false, 16));
console.log(parseInt(parseInt, 16));

console.log(parseInt("0x10"));
console.log(parseInt("0x10", 10))
console.log(parseInt("103", 2));

var a = 0.0000008;
console.log(a.toString())   //8e-7