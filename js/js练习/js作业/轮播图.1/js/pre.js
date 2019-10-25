var oPre = document.getElementById("pre");
var oImg = document.getElementById('pic');
var oPregounp = oPre.getElementsByTagName("i");

//控制偏移量实现轮播
oPregounp[0].onclick = function(){
    var newLeft = oImg.offsetLeft - 400 + "px";

    oImg.style.left = newLeft;

    if(parseInt(oImg.style.left) <= parseInt(-1600)){
        oImg.style.left = 0 + "px";
    }
}
oPregounp[1].onclick = function(){
    oImg.style.left = oImg.offsetLeft + 400 + "px";

    if(parseInt(oImg.style.left) > 0){
        oImg.style.left = -1600 + "px";
    }
}

//另外一种情况


