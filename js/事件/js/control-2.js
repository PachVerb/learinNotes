//事件解绑定
//1.element.onEvent = null
//2.elementTarget.removeEventListener(type,fn,false)
//3.element.detachEvent(onType,fn)

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

//1.
var e_div = document.getElementById('div');
var btn = document.getElementById('ipt');

// e_div.onclick = function(){
// 	console.log("haha");
// }

// btn.onclick = function(){
// 	e_div.onclick = null;
// }

//2.
function box_attribute(){
	console.log(this);
}

e_div.addEvent('click', box_attribute);

btn.addEvent('click', function(){
	e_div.removeEventListener('click',box_attribute)
});