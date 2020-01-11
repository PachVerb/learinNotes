var something = (function(){
    var nextVal;

    return {
        [Symbol.iterator]: function(){ return this;},

        next: function(){
            if(nextVal === undefined){
                nextVal = 1;
            }else{
                nextVal = ( 2 * nextVal);
            }

            return { done: false, value: nextVal }; //done 表示迭代器完成状态
        }
    };
})();

//这种改进的手工迭代方式，可以像next传值
for( var ret; 
    (ret = something.next()) && !ret.done;){
        console.log(ret.value);

        if(ret.value > 500){
            break;
        }
}

//js数组默认自带迭代器
var a = [1, 2, 3, 4, 5];
var it = a[Symbol.iterator]();
var it1 = a[Symbol.iterator]
var v = it.next().value;
var v1 = it.next().value;
var v2 = it.next().value;
var v3 = it.next().value;
var v4 = it.next().value;
console.log(a, v, v1, v2, v3, v4)

