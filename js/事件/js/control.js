//console.log(1);

//event事件绑定

//evenType = f(){};
//只能绑定一个函数，重复绑定覆盖之前的函数

var e_div = document.getElementById('div');


// e_div.onclick = function(){
// 	console.log('我被绑定了'+ '1');	
// };
// e_div.onclick = function(){
// 	console.log('覆盖'+ '2');	//
// };

//eventTarget.addEventListner('type',f(){},false); 可以绑定多个函数，不会覆盖
//两次绑定都执行
// e_div.addEventListener('click', function(){
// 	console.log('haha',1);
// });
// e_div.addEventListener('click', function(){
// 	console.log('haha',2,this);
// });

// //在chrome，this-> node
// //在IE中，this -> window

// e_div.attachEvent('onclick',function(){
// 	console.log(this);
// });
// alert(1);

//事件绑定方法，兼容不同浏览器的写法
//1.函数
// function event(ele,type, fn){
// 	if(window.addEventListener){
// 		ele.addEventListener(type,fn);
// 	}else{
// 		ele.attachEvent('on' + type, function(){
// 			func.call(ele)
// 		});
// 	}
	 
// }

// event(e_div,'click',function(){
// 	console.log(233);
// 	this.style.color = '#000';
// })

//2.Element.prototype

Element.prototype.addEvent = function(type, fn) {
	let tele = this;

	if(window.addEventListener){
 		tele.addEventListener(type,fn);
 	}else if(window.attachEvent){
 		tele.attachEvent('on' + type, function(){
 			func.call(That);
 		});
 	}else{
 		tele['on' + click] = fn
 	}
}

e_div.addEvent('click', function(){
	console.log(getComputedStyle(e_div).width,1);
})