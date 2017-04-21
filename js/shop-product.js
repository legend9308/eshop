var title=document.getElementById('btns-box');
var tit=title.getElementsByTagName('li');
var act=document.getElementsByClassName("act");
var del=document.getElementsByClassName("del-txt");

for(var i=0;i<tit.length;i++){
	tit[i].index=i;
	tit[i].onclick=function(){
		var oo=this.index;
		tit[0].className='';
		tit[1].className='';
		this.className='active';
		act[0].style.display='none';
		del[0].style.display='none';
		if (oo==0) {
			act[0].style.display='block';
		}else{
			del[0].style.display='block';
		}
	}
}