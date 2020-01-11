//属性的值 key可以传入变量,要使属性名也动态传入需要使用[a];
function setObj(a, b){
	let obj = {};
	
	obj[a] = b;
	return obj;
}

const obj = setObj('hello', 'world');

