// 多迭代器
(() => {
    function *foo(){
        var x = yield 2;
        z++;
        var y = yield (x * z);  
        console.log(x, y, z);
    }
    var z = 1;

    var it = foo();
    var _it = foo();

    var res = it.next().value;  // res 2
    var _res = _it.next().value;    //_res 2
    console.log(res, _res)  

     res = it.next(_res * 10).value; //x --> 20, z = 2, y = 40, 
     _res = _it.next(res * 5).value; // y = 120, x = 200,

    it.next( res / 2 );
    _it.next( _res / 4);

})()