
//早期闭包实现模块方法

function Hello(name){
    function greeting(){
        console.log('this is introditional moudle!' + name)
    };
    
    // public API
    return {
        greeting
    }
}

let {greeting} = Hello('JS');

greeting();

