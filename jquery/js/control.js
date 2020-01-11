// console.log(1)
//event
//ready事件
//注意 原生onload 不能与 ready混用
//1.

// $(document).ready(function(){
//     console.log(this)
// });
// // //2.
// $().ready(function(){
//     console.log(this)
// });
// //3.

//$('element:first')    选取第一个element
//$('element:eq(index)') 返回索引是index的element_html元素
//表单选择器 （':type-value'）  //array
$(function(){
    //单击
    // $('div:first').click(function(){
    //     console.log('div click');
    // });
    //双击
    // $('div:eq(2)').dblclick(function(){
    //     console.log(this.innerHTML);
    // });  
    //mouseenter    鼠标进入
    // $('div:eq(0)').mouseenter(function(){
    //     console.log(this.innerHTML,'enter');
    // });
    //mouseleave 鼠标离开
    // $('div:eq(0)').mouseleave(function(){
    //     console.log(this.innerHTML,'leave');
    // });

    //hover 鼠标悬停

    // $('div:eq(1)').hover(
    //     function(){
    //         //悬停在元素上方时
    //         $(this).css('background','deeppink')
    //     },function(){
    //         //离开元素时调用
    //         $(this).css('background','#58a')
    //     }
    // )
    //focus,blur 失焦，获焦
    // $(':text:first').focus(function(){
    //     console.log('请输入值')
    // });
    // var text = $(':text:first')
    // text.blur(function(){
    //     var regExp = /\d{11}/
    //     if(regExp.test($(this).val())){
    //         console.log('ok')
    //     }else{
    //         throw new Error('请输入合法值');
    //     }
    //     //console.log(text.val());
    // })

    //bind 1.，为某个元素绑定系列事件。某些事件是成套使用，逐个为某一元素绑定不利于维护。
    // $(':text:first').bind({
    //     focus: function(){
    //         console.log('请输入值')
    //     },
    //     blur: function(){
    //         var regExp = /\d{11}/
    //         if(regExp.test($(this).val())){
    //             console.log('ok')
    //         }else{
    //             throw new Error('请输入合法值');
    //         }
    //         //console.log(text.val());
    //     },
    // });
    //bind 2.用于传递参数   bind 的 data_object 已经绑定到事件对象e中
    // $(':button:first').bind('focus',{msg:'hello'},function(e){
    //     console.log(e.data.msg);
    // })

    //键盘事件，keydown,keypress,keyup.
    // $(':button:first').keydown(function(e){
    //     var key = e.which;
    //     console.log('keydown\t' + key)  //获取对应键位键值
    // });
    // $(':button:first').keypress(function(e){
    //     var key = e.which;
    //     console.log('keypress\t' + key) //鼠标按下，获取的是键位对应的ascall码值
    // });
    // $(':button:first').keyup(function(e){
    //     var key = e.which;
    //     console.log('keyup\t' + key)    //获取对应键位键值
    // })
    // //delegate 实现事件委托
    // $('ul').delegate('li','click', function(e){
    //     console.log(e);
    //     console.log(event.target);
    // })

    //on 代替 delegate, bind
    //on -> bind
    // $(':text:first').on({
    //     focus: function(){
    //         console.log('请输入值')
    //     },
    //     blur: function(){
    //         var regExp = /\d{11}/
    //         if(regExp.test($(this).val())){
    //             console.log('ok')
    //         }else{
    //             throw new Error('请输入合法值');
    //         }
    //         //console.log(text.val());
    //     },
    // });

    //on -> delegate
    // $('ul').on('click','li', function(e){
    //     console.log(e);
    //     console.log(event.target);
    // })
});