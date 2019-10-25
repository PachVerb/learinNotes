//构造生成器函数,写法：*结合function或者函数名结合
//创建的generator函数，无法直接调用。此时函数的返回是一个构造生成器对象。
// function *generator(c){
// 	console.log('a');
// 	console.log(c);
// 	let a = yield;

// 	console.log('b');
// 	console.log(a);
// }

// let gener= generator(12);

// gener.next(12);	//第一个传参报废	
// gener.next(5);

//使用场景类似：将一个具体的事情分步骤执行。上一次的结果作为下次的执行条件。

function * show(){
	console.log('begin');

	yield 12;	//这里是吧首次执行结果返回

	console.log('end')

	return 12;

}

let showFn = show();

let res1 = showFn.next();
console.log(res1);

let res2 = showFn.next();
console.log(res2);
