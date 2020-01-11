class Person{
    constructor (name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;  
    }
}
var person = new Person('tom');
console.log(person);
console.log(person.name);   //--> tom   通过存取器产生
var a = (person.name = 'pop');  //设置 name属性值。
console.log(person._name)   //-->   tom 对象本身存在
console.log(person)
//set

