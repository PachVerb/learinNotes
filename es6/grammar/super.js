import { kMaxLength } from "buffer";

//对于普通方法对象也实用,性质相同.这里super对象 指向 prototype

let o1 = {
    foo(){
        console.log('foo-o1');
    }
},
o2 = {
    foo(){
        super.foo() // super => o2.__proto__.
        console.log('foo-o2');
    }
};

Object.setPrototypeOf(o2, o1);
o2.foo();
