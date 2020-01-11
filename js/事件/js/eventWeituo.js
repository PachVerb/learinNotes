//事件维托
//基于事件冒泡的委托形式,在父节点上响应事件，而不是在子节点上响应事件。	
console.log(1);

var ul = document.getElementsByTagName('ul')[0];

ul.addEventListener('click', function(e){
	e = e || window.e;
	console.log(e.target);
	console.log(this)	//this->ul
});

//
