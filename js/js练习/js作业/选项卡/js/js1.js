var Content = document.getElementsByClassName('tab')[0];
var TabUl = Content.querySelector(".tab-bar");
var oLi = TabUl.getElementsByTagName('li');

var oDiv = Content.getElementsByClassName('img')[0];
var oImg = oDiv.getElementsByTagName('img');

for(var i = 0 ; i < oLi.length; i++){
    oLi[i].index = i;

    oLi[i].onmouseover = function(){
        
        for(var m = 0; m < oLi.length; m++){
            oLi[m].className='';
            oImg[m].style.display = 'none';
        }

        this.className='on';
        oImg[this.index].style.display = 'block';
    }
}
//选项卡实现过程分析：
//首先为整个nav实现一次格式化（类似），为每个按钮添加自定义属性
//为什么添加属性呢：原因是；按钮和内容区实现关联，
//然后是为每个按钮添加事件。选项卡本身就是展现当前事件元素，还原为实现事件元素。
//这样在事件执行函数内，还需要一个循环，以清楚此元素外的其他元素样式。
//最后添加样式
