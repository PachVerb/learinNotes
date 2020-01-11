//export default class
export default class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.sayName = function() {
            console.log('Please loudly tell me your name' + this.name);
        }
    }
    getAge(){
        return this.age
    }
}