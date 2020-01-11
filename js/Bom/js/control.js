// 获取可视区宽高,innerWidht,innerHeight

// console.log(1);
// var w = window.innerWidth || documentElement.clientWidth || document.body.clientWidth;
// var h = window.innerHeight || documentElement.clientHeight || document.body.clientHeight;;
// console.log(w,h);

// //获取屏幕宽高
// var ws = screen.availWidth;
// var hs = screen.availHeight;

// console.log(ws,hs);


// //location

// console.log(location.href);	//请求连接
// console.log(location.hostname);	//服务器地址
// console.log(location.pathname)	//资源地址
// console.log(location.protocol)	//服务器使用协议
// console.log(location.port)	//服务器端口

//location.assign(URL); 指定URL加载新的html文档

// location.assign("https://jd.com");

//navigator ,对象包含有关浏览器的信息。
// console.log(navigator.appCodeName);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.cookieEnabled);
// console.log(navigator.platform);
// console.log(navigator.userAgent);


//弹窗，alert,prompt,confirm



//窗口操作
//open()
//close()
//moveTo()
//resize()调整窗口大小

var myWindow = window.open('https://jd.com','JD','width=200,height=200');
myWindow.document.write('hello,我在这里');


function closeWin(){
	myWindow.close();
}

function moveWin(){
	myWindow.moveTo(500,500);
	myWindow.focus();	//新开窗口获取检点，原本浏览器窗口失去焦点
}

function resizeWin(){
	myWindow.resizeTo(500,500);
	myWindow.focus()
}
