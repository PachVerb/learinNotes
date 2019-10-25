let oElement = document.getElementsByTagName('div');
//捕获
// oElement[0].addEventListener('click', function(){
// 	console.log('div1 + 捕获');
// },true);

// oElement[1].addEventListener('click', function(){
// 	console.log('div2 + 捕获');
// },true);
// oElement[1].addEventListener('click', function(){
// 	console.log('div3 + 事件执行-捕获');
// },true);
// //冒泡
// oElement[0].addEventListener('click', function(){
// 	console.log('div1 + 冒泡');
// },false);

// oElement[1].addEventListener('click', function(){
// 	console.log('div2 + 冒泡');
// },false);
// oElement[2].addEventListener('click', function(){
// 	console.log('div3 + 事件执行-冒泡');
// },false);	//事件执行



//事件触发顺序： 先触发捕获，然后是事件执行，然后是事件冒泡
//点击触发事件元素，实际更冒泡和捕获没有关系。本身称为事件执行



//冒泡取消
// oElement[0].addEventListener('click', function(e){
// 	e = e || window.event;

// 	if(e.stopPropagation){
// 		e.stopPropagation();
// 	}else{	//IE
// 		e.cancelBubble = true;
// 	}
// 	console.log('div1 + 冒泡');
// },false);

// oElement[1].addEventListener('click', function(e){
// 	e = e || window.event;

// 	if(e.stopPropagation){
// 		e.stopPropagation();
// 	}else{	//IE
// 		e.cancelBubble = true;
// 	}
// 	console.log('div2 + 冒泡');
// },false);
// oElement[2].addEventListener('click', function(e){
// 	e = e || window.event;

// 	if(e.stopPropagation){
// 		e.stopPropagation();
// 	}else{	//IE
// 		e.cancelBubble = true;
// 	}
// 	console.log('div3 + 事件执行-冒泡');
// },false);	//事件执行



//阻止默认事件
//ontype : return false;	
//event.preventDefault();	W3C
//event.returnValue = false; IE

//return false
// document.oncontextmenu = function(e){
// 	//e = e || window.e;

// 	console.log('right click');
// 	return false;

// }

//event.preventDefault();
document.oncontextmenu = function(e){
	e = e || window.e;
	
	if(e.preventDefault){	
		e.preventDefault();
	}else{	//IE
		e.returnValue = false;
	}
	console.log('addEventListener - preventDefault');
};


