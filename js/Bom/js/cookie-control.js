// console.log(1)
//cookie

/*
cookie增删改查，cookie值形式：key1 = value1,key2 = value2; 
增加： 通过键值对的形式，逐个添加
删除： key = , expires = thu, 设置一个过去时间
改： 在此添加一个同名的想要修改的cookie值，
查：document.cookie,一次返回所有字符串形式的字符
*/

document.cookie = 'a = 123';
document.cookie = 'b = 2333';
document.cookie = 'a =';

//这里删除a
let time = new Date(2017,15,12);
document.cookie = 'a =; expires = Thu, 01 Jan 1970 00:00:00 GMT';	//(这里必须是准确时间)


console.log(document.cookie)