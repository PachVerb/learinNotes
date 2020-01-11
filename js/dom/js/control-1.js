//dom增删替
//createElement(string element-name),createTextNode(string content);
//创建 节点p以及他的文本节点
// console.log(1)
// //appendChild()把当前节点添加到父元素内子元素末尾
// let h1 = document.createElement('h1');
// let txt = document.createTextNode('appendChild');
// h1.appendChild(txt);
// document.body.appendChild(h1)

// //insertBefore()
// document.write('<hr>')

// //insertBefore(new-node, source-node)
// let h2 = document.createElement('h1');
// let txt2 = document.createTextNode('insertBefore');
// h2.appendChild(txt2);
// document.body.insertBefore(h2,h1)


//删除节点 ，removeChild(),remove()
//父亲删除儿子
// let eBody = document.getElementsByTagName('document');
//let node_h = document.body.removeChild(h1);	//有返回值，保存有删除的node
//console.log(node_h);	//node-object
//remove(), 通过自身删除
//h1.remove();	
//h1.remove();

//替换replaceChild(new-node, source-node);
// let p3 = document.createElement('p');
// let _txt3 = document.createTextNode('replace替换');
// p3.appendChild(_txt3);
// document.body.replaceChild(p3,h2);

//createComment() 方法可创建注释节点。
let _para = document.getElementById('paragraph');
let e_strg = document.createElement('strong');
let e_txt = document.createTextNode('add element and text');
let e_comment = document.createComment('###createComment');

e_strg.appendChild(e_txt);
_para.appendChild(e_strg)

_para.insertBefore(e_comment,e_strg);

//createDocumentFrament()创建虚拟节点。


//innerHTML	发生转译，内容全部替换
//innerText 不会发生转译
//textContent 不会发生转译

//_para.innerHTML = '<a href = "https://jd.com">jd</a>';	
//_para.innerText = '<a href = "https://jd.com">jd</a>';
_para.textContent = '<a href = "https://jd.com">jd</a>';


//element.setAttribute(attribute-name,value),getAttribute()

