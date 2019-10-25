
//对象继承

/* 

    1.构造器继承 
    2.原型继承
    3.拷贝继承；

*/

//需求：下面cat继承animal的属性

function animal(){
    this.type = "动物"
}

function cat(name,love){
    animal.call(this);
    this.name = name;
    this.love = love;
}


//构造函数

var cat1 = new cat("cat","mouse");

cat.prototype.showfood = function(food){
    console.log(food);
}

cat.prototype.constructor = cat;

console.log(cat1.showfood("metat"));
//通过构造函数已经继承type属性
console.log(cat1.type);

//原型继承

cat.prototype = new animal();
cat.prototype.constructor = cat;

var cat2 = new cat("meat","fish");

console.log(cat2.type);

//不能通过原型继承。

//es6继承，现语法已经实现，类于构造的分离，不在同es5构造于类不分离，或者两者根本是一个东西。


class cat{
    constructor(name,love,level){
        super(animal);
        this.level = level;
    }
    //可以添加原型方法

}
var cat = new cat("huahua","bird",12);

console.log(cat.type);
