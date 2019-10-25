// {
//     foo();  //cool
//
//     function foo(){
//         console.log('cool');
//     }
// }
//
// foo();  //cool;

//块函数作用域以以及非块级作用域结合

if(1){
    function foo(){
        console.log('cool');
    }
}else{
    function foo(){
        console.log('cool tom');
    }
}
foo();