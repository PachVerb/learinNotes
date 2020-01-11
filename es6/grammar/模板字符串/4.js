//标签模板字面量
function foo(strings, ...values){
    console.log( strings );
    console.log( values );
}
let desc = "awesome";

foo`Everthing is ${desc}!`