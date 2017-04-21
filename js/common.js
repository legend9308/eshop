function getClass(clsName,context){
	var result = [];
	context = context || document;
	var arr = context.getElementsByTagName('*');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].className.indexOf(clsName) !=-1) {
			result.push(arr[i]);
		}
	}
	return result;
}
var oMenuBox = document.getElementById('menu-box');
var aLi=getClass('menu-btn',oMenuBox);

for(i=0;i<aLi.length;i++){
	aLi[i].onmouseover = function(){
	var aUl=this.getElementsByTagName('ul');
	aUl[0].style.display='block';	
	}
	aLi[i].onmouseout = function(){
	var aUl=this.getElementsByTagName('ul');
	aUl[0].style.display='none';	
	}
}