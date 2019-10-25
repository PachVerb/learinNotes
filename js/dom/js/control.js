//遍历节点Dom tree
//节点（node），里面包括，元素，文本节点，document,document type/所以说节点不等于元素
//childNodes(),获取当前节点下的子节点。chiren获取后代元素。
//console.log(123)

// function GoThrough(node,x){
// 	if(node.childNodes != undefined){
// 		for(let i = 0;  i < node.childNodes.length; i++){
// 			let a = node.childNodes[i];
// 			let s = a.nodeType + '-' + a.nodeName + '-' + a.nodeValue;
// 			console.log(s + x);
// 			if(a.attributes != undefined && a.attributes.length != 0){
// 				let attr = "{attr:"
// 				for(let j = 0; j < a.attributes.length; j++){
// 					let b = a.attributes[j];
// 					attr += b.nodeType + '-' + b.nodeName + '-' + b.nodeValue;
// 				}
// 				attr += '}';
// 				console.log(attr);
// 			}
// 			GoThrough(a,x)	//递归遍历子节点
// 		}
// 	}
// }

//GoThrough(document, '\t');


//模仿children()

function getChildren(element){
	let children = [];
	if(element.childNodes != undefined){
		for(let i = 0; i < element.childNodes.length; i++){
			let a = element.childNodes[i];
			if(a.nodeType == 1){
				children.push(a)
			}
		}
	}

	return children
}

console.log(getChildren(document.body));
let box_node = document.getElementsByTagName('body');
console.log(box_node,);