//多生成器实列
function *foo(){
    var x = yield 2;
    z++;
    var y = yield (x * z);
    console.log(x, y, z);
}

var z = 1;

var it2 = foo();    
var it1 = foo();
//return value 2

var val1 = it1.next().value;    //2
var val2 = it2.next().value;    //2 

// z = 2
val1 = it1.next(val2 * 10).value;   //x = 20,  val1 40
val2 = it2.next(val1 * 5).value;    // x = 200  val2 = 400

it1.next( val2 / 2);    //y 200
it2.next( val1 / 4);    // y  10

//x 20 y 200 z 3
//200 10 3

//交换迭代器it1 it2 位置
// x 20 y 300 z 3
// 200 10 3


//交换 val2 val1 位置
// 200 10 3
// 10 150 3

//



