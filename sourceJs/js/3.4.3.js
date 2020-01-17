//Date Error

//date， 使用new关键字
// 指定时间
//date  new Date(datastring)
var time = new Date('1995-12-17T03:24:00'); 
var time2 = new Date();
// console.log(time.getFullYear(), time.getMonth(), time.getSeconds(), time.getDate(), time.getDay())
//new Date(value)
//value整数值, 毫秒值， 表示1970到现在的指定时间差
time = new Date(243234234908);  //
// console.log(time.getFullYear())
// console.log(Date.parse(time2))

//各个时间分量值
//new Date(year, mouth, day, hour, minutes, seconds)
time2 = new Date(2020, 0, 14, 16, 08, 15)
// console.log(time2.getFullYear())

//now,parse..
//now 获取当前时间
console.log(Date.now() / (24 * 60 * 60 *  1000)) //获取从 1970到当前到天数
//不指定时间
var time3 = new Date();

//不使用new关键字
console.log(Date() + '--- '+time3)