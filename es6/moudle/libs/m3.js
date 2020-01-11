function add(x, y){
    return x + y;
}
function num(){
   return arguments[0] + arguments[1]
}
//这里虽然以函数名导出，却省略了大括号，意味着导出的模块内函数，是匿名函数，导入其他模块内时，可以为其命名。

// export default add  
// add=1;  //无效 ，默认导出的是一个表达式，无法修改值。

//默认导出绑定
// num = 1;
// export { num as default }
