// var obj = new Foo();    //不能提升
class Foo{  //Foo不属于全局对象属性
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }
    //Foo.prototype.gimmXY= fn;
    gimmXY(){
        return this.x + this.y;
    }
}
var obj = new Foo('left', 'right'); 

if(obj instanceof Foo) console.log('right!!!')

// this.obj
// function Foo(a,b){
//     this.x = a;
//     this.y = b;
// }

// this.Foo    //Foo作为全局对象属性。