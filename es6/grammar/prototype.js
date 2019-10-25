//为已经存在的对象设置prototype.
let o1 = {
    a:1
};

let o2 = {
    //"__proto__": o1
    //..
};
// console.log(o2.__proto__)   //{a:1} //不推荐    //这种是set/get

//为已经存在对象设置原型,Object.setPrototypeOf(target-obj, source-obj)
//1. Object.setPrototypeOf(o2, o1);
//o2.__proto__ = o1;
console.log(o2.__proto__);  //{a:1}

