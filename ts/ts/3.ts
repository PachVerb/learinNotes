//定义接口
//第一种，接口为实际的，对一个对象属性和方法描述
interface Person{
    name: string,
    age: number
}

function printName(person: Person){
    console.log(person.name)
}

//使用接口
const john = { name: 'jhon', age: 21 }
const mary = { name: 'Mary', age: 18, phone: '4898'}

printName(john)
printName(mary)

