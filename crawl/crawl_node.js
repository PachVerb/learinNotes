//导入moudle
const https = require('https'); 
const http = require('http');   
const fs = require('fs');

function getData(){
    return new Promise((resolve, rej) => {
        var dateAll = null;
        let Biurl = ' https://api.bilibili.com/pgc/season/index/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page=1&season_type=1&pagesize=20&type=1'
        for(let i = 1; i < 149; i++){   //分页爬取
            let url =  ' https://api.bilibili.com/pgc/season/index/result?season_version=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page='+ i + '&season_type=1&pagesize=20&type=1'
            https.get(url, function(res){
        
                let date = '';
            
                res.on('data', function(chunk){ //事件监听数据返回
                    date += chunk;  //拼接服务器返回json,这里会自动转化为二进制buffer
                });
                res.on('end',function(){    //数据响应完成时触发
                    resolve(date);  
                    //console.log(1,i);
                });
            }).on('error', function(e){
                console.error(e.message);
            });
           //console.log(i)
        }
    });
};

var excuGet = getData();

excuGet.then(function(val){
    var All = JSON.parse(val);
    var list_img = (All.data).list;
    var imgs_url = [];
    var img_name = //;

    list_img.forEach(element => {
        imgs_url.push(element.cover);
    });                        
    for(let j = 0; j < imgs_url.
        length; j++){
                                                         
        http.get(imgs_url[j], function(res){
            var imgdata = '';
            res.setEncoding("binary");
            res.on('data', (chunk) => {
                imgdata += chunk;
            });
            res.on('end', () => {
                //写入文件
                fs.writeFile('D:\\biliIMG\\'+ imgs_url[j].substr(-imgs_url[j].lastIndexOf('/'),27) + '.jpg', imgdata, 'binary',(err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            })
        })
    }
    

})


