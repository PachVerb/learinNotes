 //伸长div
 var MAX = 500;
 //div的最短或者最矮高度
 var EDGE = 20;
 //从EDGE到MAX的长度
 var LENGTH = MAX - EDGE;
 //从EDGE涨到Max,或者从MAX小到EDGE的时间
 var PERIOD = 1000;
 var div = $('div#divid')

 function startAnimate(){
    div.animate({width: MAX + 'px'},PERIOD,'linear').animate({width: EDGE + 'px', left: MAX - EDGE + 'px'}, PERIOD,'linear');
    div.animate({height: MAX + 'px'},PERIOD,'linear');
    div.animate({height: EDGE + 'px', top: MAX - EDGE + 'px'}, PERIOD,'linear');
    div.animate({width: MAX + 'px',left:'0px'},PERIOD,'linear');
    div.animate({width: EDGE + 'px'}, PERIOD,'linear');
    div.animate({height: MAX + 'px',top: '0px'},PERIOD,'linear');
    div.animate({height: EDGE + 'px'}, PERIOD,'linear');
    //startAnimate(); //递归调用内存开销大
 }

 startAnimate();

 //方法链，同一元素调用多个方法。
 //作用：避免浏览器多次查找同一个元素，造成不必要内存开销。
 
 //如果需要链接一个动作，只需要简单追加动作即可。
 //列：div.animate({width: MAX + 'px'},PERIOD,'linear').animate({width: EDGE + 'px', left: MAX - EDGE + 'px'}, PERIOD,'linear');