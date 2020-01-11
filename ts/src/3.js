function printName(person) {
    console.log(person.name);
}
//使用接口
var john = { name: 'jhon', age: 21 };
var mary = { name: 'Mary', age: 18, phone: '4898' };
printName(john);
printName(mary);
