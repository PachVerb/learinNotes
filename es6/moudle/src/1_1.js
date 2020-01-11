//改进
let mo = (function(name){
    function greeting(){
        console.log('this is moudle' + name);
    }
    return {
        greeting
    }
})('hello');

mo.greeting();