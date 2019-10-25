function create(proto){
	function f(){}

	f.prototype = proto

	return new f()
}