/*
    本节用到的选择器
    　$("div:contains('Name')")       选取所有<div>中含有'Name'文本的元素 
      :contains()括号中可以是裸词,也可以是引号引起。
*/
//dom操作
//元素添加删除
//append() 在被选择元素之后插入元素，作为子元素
//prepend() 在被选择元素之前插入元素，作为子元素
//after() 在备选元素之后插入元素，作为同级元素
//before()  在备选元素之前插入元素，作为同级元素


//html元素创建
//string
var p = '<p>hello world</p>';
//jQuery
var h1 = $('<h1></h1>').text('$(<element>)创建一个元素');
//js
var span = document.createElement('span');
span.innerHTML = 'js create element';

//元素添加
$('#box8').before(p);
$('#box8').append(span);
$('#box8').prepend(h1);
$('#box8').after(span);

//删除dom元素
//自杀式
//remove()
//方式一
// $('span:contains(js)').remove();
//方式二
// $('span').remove(':contains(js)');
//他杀式
//empty()
// $('#box8').empty();


//CSS操作
//addClass('cass-name');

//removeClass('class-name');

//toggleClass()
$(':button:first').click(function(){
    $('#box8').toggleClass('backC')
})

//css()
//操作一个属性
$('#box4').css('background','pink');
//操作多个
//1.
$('#box5').css('background','green').css('color','blue');   //jquery推荐方法链操作
//2
$('#box6').css({
    'font-size':'32px',
    'color':'white'
})