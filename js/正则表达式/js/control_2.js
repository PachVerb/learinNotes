//正则表达式详解，词法分析用，或者邮箱电话验证
//1.简单类
//1.1匹配一个单词
var regExp = /hello/g;
var str = 'hello world';

// console.log(str.match(regExp));
//范围类 
//[]指代一个字符，内部表示字符的范围，[0-9] = [0123456789];十六进制，[0-9a-fA-F];
//3 负向类[^0-9]非数字，排除数字
str2 = '4571;a497466;';
// console.log(str2.match(/[^0-9]+/g));

// 匹配字符串两位数
// console.log(str2.match(/[0-9][0-9]/g),'匹配两次');
// 两次，匹配单位出现次数  {n}
// console.log(str2.match(/[0-9]{2}/g),'{2}');   //数组结果返回
// {m,n} 至少m次，至多n次
// console.log(str2.match(/[0-9]{3,4}/g),'(3,4)');
// {m,} 至少m次
// console.log(str2.match(/[0-9]{3,}/g),'{3,}');
// ? 零次或着1次 ， =》{0，1}
// console.log(str2.match(/[0-9]?/g),'?')
// console.log(str2.match(/[0-9]{0,1}/g),'{0,1}');
// * 0 次或者多余 0 次 =》 {0， }
// + 1次或者多余1次， {1，}

/*
    像 ？，+ 这样的两次，匹配单位出现次数最小也满足规则，为什么实际匹配中却按最大的返回呢？这是有计算机系统系统决定的，
    每次匹配会将所有字符纳入，并按最大返回

    贪婪量词：？ + * 找到匹配的最大串
    惰性量词： *？ +？ 找到匹配的最小串
*/
// console.log(str2.match(/[0-9]+?/g));

//匹配16进制的数字
var str3 = '4567;a757;zfb4;d548';
// console.log(str3.match(/[0-9a-fA-F]+/g));    //贪婪
// console.log(str3.match(/[0-9a-fA-F]+?/g));   //惰性
// console.log(str3.match(/[^0-9a-fA-F]+?/g));  //匹配不是

var str4 = 'asdf55hlhioiu5556464asdfs55';
//两者区别就是匹配时，单位的大小不同
// console.log(str4.match(/.*55/g));   //贪婪
// console.log(str4.match(/.*?55/g));  //惰性

//5.通配符 预定义类
/*
    . = [^\n\r] 除回车和换行都可以匹配
    \d = [0-9]
    \D = [^0-9]
    \w = [a-zA-Z_0-9] 数字字母下划线
      ' 列： 一个变量命名状态： /[a-zA-Z_]\w*/
/*
    \W = [^a-zA-Z_0-9]  
    \s = [\t\n\x0B\f\r ]匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。
    
    \S = [^\t\n\x0B\f\r ] 匹配一个非空白符。,

    \b 表示边界（两个字符的中间位置） 一边是\w,另一边是\W
    \B 不是边界
    ^ 表示开始，尖括号在中括号外边
    $ 表示结束
*/

var str5 = 'a==b';
//一个匹配的串不能和另一个匹配的串不能重合，继续匹配会重匹配的串的后面开始，前面的找不到
// console.log(str5.match(/.\b/g));
// console.log(str5.match(/.\b./g));
//匹配开头结尾
// console.log(str5.match(/^a/g));
// console.log(str5.match(/^./g)); //等同于上面
// console.log(str5.match(/.$/g))

//分组， 一个正则表达式，可以对整个串匹配，同样可以依照（）中的pattern进行匹配
//分组格式
/*
    （pattern）匹配pattern,同时捕获结果，自动设定组号
    \1，RegExp.$1:反向引用，（对前面的匹配结果的复制引用）
    （？<name组名>pattern）匹配pattern,同时捕获结果，设定name为组号
    \k<name>，对前面匹配结果的复制引用
*/
str5 = 'mom and dad';
// console.log(str5.match(/mom( and dad)?/g)); 
// console.log(str5.match(/mom( and dad)?/));  //不加g 此时分组也会匹配到
//操作分组
// console.log(RegExp.$1); //and dad
// console.dir(RegExp);

// str5 = 'python javascript javascript go go';
// console.log(str5.match(/(\b[a-zA-Z]+\b)\s+\1/));   //\1捕获前面的相同单词，并进行匹配
// console.log(str5.match(/(?<n1>\b[a-zA-Z]+\b)\s+\k<n1>/))
// console.log(RegExp.lastMatch)   //匹配完整结果，大串
// console.log(RegExp.$1)  //分组，字串


//零宽（不占字符长度）先行\后行断言
str5 = 'reaaa;rcaaa=bbb=;';
//寻找两字符，字符后面以分号结尾
console.log(str5.match(/.{2}(?=;)/g));  //零宽先行断言
//寻找4个字符，且以ea开头
console.log(str5.match(/(?<=ea).{4}/g)); //零宽后行断言，注意以什么开头断言时，需要加 <，在匹配字符后面不需要加
//寻找三个字母，其后不已分号结尾
console.log(str5.match(/[a-z]{3}(?!;)/g));     //零宽负向（不是，或者反的）后行断言
//寻找不已re开头的三个字母
console.log(str5.match(/(?<!re)a{3}/)); //index:8, aaa

//或    |
str5 = 'var aaa;';  //变量申明
var str6 = 'function f(){}';    //函数申明字符串
//模拟此法分析器，对代码字符串进行匹配

// /^var\s+[a-zA-Z]\w*;/g;  //变量申明正则
// /^function\s+[a-zA-Z]\w*\s*(\)\{\}/g //函数申明正则
// 或 | 合并两条规则 ，/^var\s+[a-zA-Z]\w*;|^function\s+[a-zA-Z]\w*\s*\(\)\{\}/g

// console.log(str5.match(/^var\s+[a-zA-Z]\w*;|^function\s+[a-zA-Z]\w*\s*\(\)\{\}/g));
// console.log(str6.match(/^var\s+[a-zA-Z]\w*;|^function\s+[a-zA-Z]\w*\s*\(\)\{\}/g));

//1.匹配手机号码,以数字1开头，34578第二位数，3，4和7，8之间得有-

// /^1[34578]+[0-9]{9}$/g
// /^1[34578][0-9]-?\d{4}-?\d{4}$/g

// str5 = '15815647894';
// console.log(str5.match(/^1[34578][0-9]-?\d{4}-?\d{4}$/g))
// str5 = '11111111111';   //null
// console.log(str5.match(/^1[34578][0-9]-?\d{4}-?\d{4}$/g))
// str5 = '130-1234-4567';
// console.log(str5.match(/^1[34578][0-9]-?\d{4}-?\d{4}$/))

// 匹配信箱

// 前面数字，字母，或者 然后是 @ 字母数字，下划线.

// /[a-zA-Z0-9]+@[a-zA-Z0-9]+[a-zA-Z]*.*[a-zA-Z]$/
// /[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,3}/;
// str5 = '1506262681@qq.com.cn'
// console.log(str5.match(/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,3}$/g))

//匹配整数,可能的情况，number,+number,-number
// regExp = /^[+-]?\d+$/;
// str5 = '1564';
// console.log(str5.match(regExp))
// str5 = '+1564';
// console.log(str5.match(regExp))
// str5 = '-1564';
// console.log(str5.match(regExp))
// str5 = '4.546';
// console.log(str5.match(regExp)) //null

//匹配浮点数（包括整数）,可能情况，整数，小数，科学计数法
regExp = /^[+-]?\d+(\.\d+)?([Ee][+-]?\d+)?$/
// str5 = '12';
// console.log(str5.match(regExp));
// str5 = '0.12';
// console.log(str5.match(regExp));
// str5 = '1.2E5';
// console.log(str5.match(regExp));
// str5 = '1.2E-5';
// console.log(str5.match(regExp));

//匹配汉字，实质匹配编码集，汉字编码是（UTF-8）
regExp = /^[\u4e00-\u9fa5\uff0c\u3002]+$/   //\u4e00-\u9fa5 UTF-8汉字编码范围，\uff0c中文逗号编码
// str5 = '弱小和无知不是生存的障碍，傲慢才是';
// console.log(str5.match(regExp));

//String,正则函数，search(regExp), 匹配直接量和对象，返回整数，返回第一个匹配的位置；匹配不到返回 -1；

// str5 = 'hel shanshan lee shanshan javascript';
// console.log(str5.search(/\bshanshan\b/));   //4
// console.log(str5.search(/\bshanshan\b/g));   //4,注意，忽略全局匹配 g

//match() 直接量和对象
//有g情况，返回所有匹配的最大串。
//无g ,数组中的元素，index:表示第一个匹配的最大串的开始位置，其他表示分组；input:表示原始的串。

//replace(regExp/substr,replacement);
//regExp直接量或对象，substr 需要替换的子串
// replacement 替换的串，或函数。

// str5 = 'python is powerful python';
//把python替换成大写
// console.log(str5.replace(/\bpython\b/g,'PYTHON'));  //加 g 匹配并替换，否则只替换第一个匹配的
// console.log(str5.replace('python','PYTHON'))

str5 = 'aaa-bbb   ccc-ddd';
console.log(str5.replace(/([a-z]+)-([a-z]+)/g,'$2-$1:$\''))  //replacement: $1-$99 代表分组，$&表示字串，$` 字串左侧，$'字串右侧1`1` 1

//replacement使用函数
function replacer(match, p1, p2, offset, str){  //offset:index, str:input, p1:第一个分组
    // var sRet = '';
    // for(var i = 0; i < p1.length; i++)
    console.log(match,p1,p2,offset,str);

}
// console.log(str5.replace(/([a-z]+)-([a-z]+)/g,replacer));


//fromCharCode(unicode8numx,..)) 更具unicode8编码值，返回指定字符
//charCodeAt返回指定字符的unicode8的数值。
function replacer1(match, p1, p2, offset, str){
    var sRet = '';
    for(var i = 0; i < p2.length; i++){
        sRet += String.fromCharCode(p2.charCodeAt(i) + 1);
    }
    sRet +='=';
    for(var i = 0; i < p1.length; i++){
        sRet += String.fromCharCode(p1.charCodeAt(i) + 1);
    }
    return sRet;
}
// console.log(str5.replace(/([a-z]+)-([a-z]+)/g,replacer1));

str5 = 'hello is ver good good good good study day day up';
//split(separator,howmany)，切断字符串
//separator 正则，字符串
//howmany最大长度

console.log(str5.split(/\s+/));
console.log(str5.split(/\s+/,8));   
console.log(str5.split(''));    //不添加长度切出整个字符

//regExp test(string) boolean 测试某个规则是否匹配 
// console.log(/\bhello\b/.test(str5));    //true
// console.log(/\bhelloa\b/.test(str5));   //false

//regExp exce(string) 返回数组（找不到返回null）
//没有 g ,返回结果跟match返回结果一样。
//有 g, lastIndex中放入字串(匹配的字串)结束位置的下一位，每次调用往后移。
var regExp = /\bgood\b/g;
regExp.lastIndex = 17;  //设定第一个匹配字串可以继续匹配，直到匹配为-1；
// console.log(regExp.exec(str5));
// console.log(regExp.lastIndex);  //lastIndex

// lastMatch 非标准属性是正则表达式的静态和只读属性，含有最后匹配到的字符串

//练习：Date的format函数
//给定 xxxx年MM月dd日，正则匹配替换成相应的字符串
var d1 = new Date();
Date.prototype.format = function (fmt){
    var obj = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's': this.getSeconds()
    };
    if(/y+/.test(fmt)){
        var year = this.getFullYear().toString();
        if(RegExp.lastMatch.length <= year.length){
            year = year.substr(-RegExp.lastMatch.length);   //截取year的后几位
        }
        fmt = fmt.replace(RegExp.lastMatch, year);
        console.log(RegExp.lastMatch);
    }
    for(var k in obj){
        var r = new RegExp(k)  //new RegExp(/'('+ k +')'/)
        if(r.test(fmt)){
            var x = obj[k].toString();
            if(RegExp.lastMatch.length > x.length){
                //补零
                x = '0000' + x;
                x = x.substr(-RegExp.lastMatch.length);
                console.log(RegExp.lastMatch,1);
            }
            fmt = fmt.replace(RegExp.lastMatch, x);
        }
    }
    return fmt;
};

console.log(d1.format('yyyy年MM月dd日hh时mm分s秒'));



