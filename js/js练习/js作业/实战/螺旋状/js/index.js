(function(){
    var length = 125;
    var oUl = document.getElementById("main").children[0];
    var aLi = oUl.children;

    //生成li;
    for(var i = 0; i<125; i++){
        var oLi = document.createElement("li");
        oLi.x = i % 5;
        oLi.y = Math.floor(i%25/5)
        oLi.z = Math.floor(i/25)
        oLi.innerHTML = i;
        
        /* 
            分析：（初始化li位置）网页加载时随机分配的li实现。对每个li使用3d的tanslate3d属性来改变li设置位置。


        */
        var Tx = Math.random() * 5000 - 2000;
        var Ty = Math.random() * 5000 - 2000;
        var Tz = Math.random() * 5000 - 2000;

        oLi.style.transform = `translate3d(${Tx}px,${Ty}px,${Tz}px)`
        oUl.appendChild(oLi);
    }

    //矩阵定位每个li的位置
    setTimeout(grid,500);

    function grid(){
        var disX = 300;
        var disY = 300;
        var disZ = 800;
        //循环实现矩阵效果，遇到的问题，由于偏移是参考ul，li，从而整个矩阵的顶角于ul对其，导致整个矩阵不居中。

        /* 
            法一：移动ul实现矩阵居中，这种方法导致，会引起中心点改变，不行。
            法二：
            改变第一个li的偏移距离实现居中。
        */
        for(var i = 0; i < aLi.length; i++){
            var x = (aLi[i].x - 2) * disX;
            var y = (aLi[i].y - 2) * disY;
            var z = (aLi[i].z - 2) * disZ;

            aLi[i].style.transform = `translate3d(${x}px,${y}px,${z}px)`;
        }
    };

    //拖拽
    (function(){
        var TranZ = -1800;
        var rotX = 0;
        var rotY = 0;
        document.onmousedown = function(e){
            var sX = e.clientX;
            var sY = e.clientY;
            var allX = rotX;
            var allY = rotY;
            document.onmousemove = function(e){ 
                //console.log(e.clientX,e.clientY)
                var DisX = e.clientX - sX;
                var DisY  = e.clientY - sY; 
                allX = rotX - DisY * 0.2;
                allY =rotY + DisX * 0.2;
                oUl.style.transform = `translateZ(${TranZ}px) rotateX(${allX}deg) rotateY(${allY}deg)`
            }
            document.onmouseup = function( e ){
                //组织鼠标移动
                rotX = allX;
                rotY = allY;
                document.onmousemove = null;
                //console.log(rotX)
            }
        };
        document.ondrag = function(){
            return false;
        };
        document.onselectstart = function(){
            return false;
        };

         //滚轮
        (function(fn){
            document.onmousewheel = function(e){
                var d = e.wheelDelta / 120;
                /* 
                    下面调用传入的函数，原始写法，fn.call(this,d);
                    个人认为没必要，同样this,还是指向window 
                */
                
                fn(d);
            };
        })(function(d){
            TranZ += d * 100;
            oUl.style.transform = `translateZ(${TranZ}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
        });

    })();
})()
