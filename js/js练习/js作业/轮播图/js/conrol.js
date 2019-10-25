//获取Dom
var oWarp = document.getElementById('warp');
var oPic = document.getElementById("pic")
var btn = document.getElementById("btn")
var oImg = document.getElementsByTagName("img");
var oBtn = document.getElementsByTagName("a");
var oPre = oWarp.getElementsByTagName('i');
var spantext = document.querySelectorAll(".pBox span")[0];
var ptext = document.querySelector(".bottom");

var checkBox = document.getElementsByClassName("checkBox")[0];
var chanBtn = checkBox.getElementsByTagName("span");

var index = 0;
var mark = true;
var arry = ["A","B","C","D","E"];

// for(var i = 0; i < oImg.length; i++){
//     index = i
//     oBtn[i].onclick = function(){

//         for(var m = 0; m < oBtn.length; m++){
//             oImg[m].className = '';
//             oBtn[m].style.backgroundColor = ""
//         }

//         oImg[index].className = 'active';
        

//     }
// }
oPre[1].onclick = function(){
    //每次点击都进行一次初始化
    oImg[index].className = '';
    index ++;

    if(mark){
        if(index > 4){
           index = 0;
        }
    }else{
        if(index > 4){
            index = 4;
            alert("stop");
        }
    }
    // if(index > 4){
    //     index = 0;
    // }
    oImg[index].className = 'active';//index = 5 ==>导致bug
    spantext.innerHTML = index + 1;
    ptext.innerHTML = arry[index]
}

oPre[0].onclick = function(){
    oImg[index].className = '';
    index--;

    // if(index < 0){
    //     index = 4;
    // }
    if(mark){
        if(index < 0){
           index = 4;
        }
    }else{
        if(index < 0){
            index = 0;
            alert("stop")
        }
    }
    oImg[index].className = 'active';
    spantext.innerHTML = index + 1;
    ptext.innerHTML = arry[index]
}

//单边切换
chanBtn[0].onclick = function(){
    this.className = 'open';
    chanBtn[1].className = ''
    mark = true;
}
chanBtn[1].onclick = function(){
    this.className = 'open';
    chanBtn[0].className = ''
    mark = false;
}

