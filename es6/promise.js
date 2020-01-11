console.log(1);

/*
promise es6的一个操作构造，
同步方式，操作异步

*/

let p = new Promise(function (resolve,reject){
	//resolve,reject分别事promise的两个异步回调，一个表示成功	//时的回调，一个表示失败时的回调。
	$.ajax({
		url:'package.json',
			dataType:"json",
			success(arr){
				resolve(arr);
			},
			error(err){
				reject(err)
			}
		})
	});
	//这里的操作是吧上面执行结果，交给后面执行。
	//asy_promise.then(function (arr) {
	//	console.log('成功' + arr.version)
	//},
	//function (err){
	//	console.log('失败了' + err)
	//});

//在开一个promise执行异步
let p1 = new Promise(function (resolve,reject){
	//resolve,reject分别事promise的两个异步回调，一个表示成功	//时的回调，一个表示失败时的回调。
	$.ajax({
		url:'package.json',
			dataType:"json",
			success(arr){
				resolve(arr);
			},
			error(err){
				reject(err)
			}
		})
	});
	//这里的操作是吧上面执行结果，交给后面执行。
	//asy_promise.then(function (arr) {
	//	console.log('成功' + arr.version)
	//},
	//function (err){
	//	console.log('失败了' + err)
	//});

//这里不再单个.then处理每一promise结果。通过.all处理所有promise


Promise.all([p,p1]).then(function(arr){
	let [result1,result2] = arr;

	console.log(arr);
	console.log(result1,result2);
	alert('全都成功了' + arr)
},function(){
	console.log('失败')
});

//ajax本生有对promise封装
$.ajax({
	url:'面向对象-编程.js',
	dataType:'json',
	success(data){
		console.log(data.responseText`);
	},
	error(err){
		console.log(err)
	}
})


