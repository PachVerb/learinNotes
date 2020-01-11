//promise封装
function createPromise(url){
	return new promise(function (res,rej){
		$.ajax({
			url,
			dataType:'json',
			success(data){
				res(data);
			},
			error(err){
				rej(err);
			}
		});
	});
}




