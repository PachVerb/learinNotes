var div = document.getElementsByTagName('div')[0];

//需要用到事件，onmousedown,onmouseup,onmousemove
function onMouseDown(e){
	e = e || window.event;
	
	//计算鼠标相对div位置。
	var x = e.clientX - div.offsetLeft;;
	var y = e.clientY - div.offsetTop;
	div.style.cursor = 'move';

	function onMouseMove(e){
		e = e || window.event;
		
		div.style.left = e.clientX - x + 'px';
		div.style.top = e.clientY - y + 'px';
	}
	//鼠标移动
	document.addEventListener('mousemove', onMouseMove,false);

	//解绑定
	function unBundleEvent(){
		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseMove, false)
		div.style.cursor = 'normal'
	}

	div.addEventListener('mouseup', unBundleEvent, false);
	console.log(1)
}
div.addEventListener('mousedown',onMouseDown,false)