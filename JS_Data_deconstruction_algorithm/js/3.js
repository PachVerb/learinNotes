//@ts-check
function addNum(...a){
    var sum = 0;
    a.forEach((item)=>{
        sum += item
    });
    return sum;
}
//导出申明
export {addNum};