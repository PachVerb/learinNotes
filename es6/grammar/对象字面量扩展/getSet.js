// Es5 getter/setter
let o = {
    __id: 10,
    get id() { return this.__id++; },
    set id(v) { this.__id = v}
}

o.id;   //10
let a = o.id;   //11
console.log(a);
o.id = 20;
o.id;   //20
let _id = o.__id;   //21
console.log(o.id);