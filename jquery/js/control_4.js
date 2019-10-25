//显示相关
$(function(){
    //显示隐藏
    //show([speed][,fn])
    // $('button:eq(0)').click(function(){
    //     $('#box9').show(2000,function(){
    //         console.log(1);
    //     });
    // });
    // //hide()
    // $('button:eq(1)').click(function(){
    //     $('#box9').hide(2000,function(){
    //         console.log(1);
    //     });
    // });
    // //toggle()
    // $('button:eq(2)').click(function(){
    //     $('#box9').toggle(2000,function(){
    //         console.log('toggle')
    //     })
    // });

    //淡入淡出
    //fadeIn
    $('button:eq(3)').click(function(){
        $('#box9').fadeIn(2000,function(){
            console.log('fadeIN');
        })
    });
    //fadeOut
    $('button:eq(4)').click(function(){
        $('#box9').fadeOut(2000,function(){
            console.log('fadeOut');
        })
    });
    //fadeToggle
    $('button:eq(5)').click(function(){
        $('#box9').fadeToggle(2000,function(){
            console.log('fadeToggle');
        })
    });

    //滑动
    //slideDown
    $('button:eq(6)').click(function(){
        $('#box9').slideDown(2000,function(){
            console.log('fadeIN');
        })
    });
    //slideUp
    $('button:eq(7)').click(function(){
        $('#box9').slideUp(2000,function(){
            console.log('fadeIN');
        })
    });
    //slideToggle
    $('button:eq(8)').click(function(){
        $('#box9').slideToggle(2000,function(){
            console.log('fadeIN');
        })
    });

   