//基础选择器
/*
1.* 表示匹配所有
2. 标签选择器
3. , 表或,逗号选择器
4. 匹配ID
5.匹配类 class

二类.
1.层次选择器，直接或间接选择后代
2.直接后代选择器
3.毗邻选择器
4.邻接或不邻接后代选择器
 


*/
//3.
// $('.div,p,span').css('background-color','red');
//二类 1.
// $('.div p').css('background-color', 'red'); 	//通过p的直接父元素
// $('body p').css('background-color','blue');		//通过body元素间接选取。

// $('div>p').css('background-color','deeppink');	//2.
// $('p + p').css('background-color','yellow');	//3.
// $('p ~ p').css('background-color','orange');	//4.


// //三类，基本过滤选择
// //element-son:first,element-son:last,element:not()

// $('p:first').text('hello world');	//选取单个元素
// $('p:last').text('last one p-element');	//选取单个元素

//选取一组元素
//:not(selector)
$('span:not(.spn)').css('background-color', '#58a')	//('span:not(.spn)') 选取一组元素
//even（奇）,odd(偶)
$('p:even').css('font-size','3rem');
$('p:odd').css('font-size','2rem');
//eq(index),gt(),lt()
//eq
$('.div2 p:eq(2)').text('i use eq--p');

//gt(index),大于指定的index,包括边界
$('.div2 p:gt(4)').css('background-color', 'red')
//lt(index),小于指定的index
$('.div2 p:lt(5)').css('background-color', 'orange');

//animate()做动画
function animateP(){
	$(".div p:eq(0)").animate({width:'50%'}, 'slow');
	$('.div p:eq(0)').animate({width:'100%'},'slow',animateP)
}
animateP()

//动画元素，作为选择。应用改变本身颜色
$(document).ready(function(){
	$("#btn").click(function(){
		$(':animated').css('background-color','yellow')
	})
})

//4.可见性过滤选择器
// display:none,或者，input type=hidden 不可见，没有他的位置
// visibility:hidden 或者 opacity:0 不可见
//:hidden,内容隐藏，且不占位置
//：visible所有可见元素

//内容过滤器,包含文本字符
$(:containes(string))

//空，:empty

//:parent包含子元素或者文本

//包含子元素 
//$('f-ele:has(p-ele)') 


//属性过滤选择器
//带有属性名就行
$('ele[attributeName]')

//带有属性，并且符合属性值
$('ele[attributeName = \'value\']')

//不带有属性，或者带有属性不符合属性值

$('ele[attributeName ！= \'value\']')；

//带有属性，并且不符合属性值。通过过滤器filter()

$('.div2 p').filter('[class]').filter('[class != \'op\']').css(' background-color')