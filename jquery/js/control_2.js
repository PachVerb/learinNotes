$(function(){
    // console.log(2);
    //本节用到的选择器
    /*
        $(':input'),选择所有input, textara,button,select.



    */
    //jquery常用方法
    //text()
    //Get the combined text
    // var box_text = $('#box1').text();   //仅仅获取文本，不包括匹配元素内的标签。
    // console.log(box_text);
    //set content of matched element
    //.text(str[,number][,boolean])
    // $('#box1').text('<b>hello world</b>');
    // //.text(function(index, origText))
    // $('#box1').text(function(index, origText){
    //     console.log(index,origText)
    //     return 'after add content'
    // })

    //2. 设定或者HTML,html(); 
    // var box_html = $('#box1').html();
    // console.log(box_html);
    // $('#box1').text(function(index, origText){
    //     console.log(index,origText)
    //     return 'after add content'
    // })

    //3.val()表单元素特有
    //get_val
    // var input_value = $('input:first').val();
    // console.log($(':input'))
    // console.log(input_value);
    // //set_val
    // $('input:first').val(function(i, origText){
    //     return 'text'
    // })

    //attr，获取或者设定属性
    var type_text = $('input:eq(0)');
    var type_button = $('input:eq(1)');
    console.log(type_button)
    // console.log(type_text.attr('type'),type_button.attr('type'));
    //设置
    type_button.attr('type','submit');
    console.log(type_button.attr('type'))

    type_text.attr({    //修改多个属性
        'type': 'password',
        'value':'1234'
    })

});
//eval()
