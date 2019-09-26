这里对css flex布局相关属性逐个测试了一番。

>flex layout,既弹性布局。使用网页基本元素，盒子元素，来实现弹性布局。解决了网页布局，多设备显示问题

# 使用方法

首先需要对容器元素设定display：flex | inline-flex; 这样呈现的效果是，项目（子元素）从左至右排开，沾满容器元素可用空间。

通过调整浏览器视窗，可以发现，主轴，交叉轴上，项目展示的效果数量，都会发生变化。

# css属性
用于容器元素
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content

用于项目
order
flex-grow
flex-shrink
flex-basis
flex
align-self