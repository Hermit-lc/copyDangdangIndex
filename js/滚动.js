document.getElementById("bd_right_first_bottom_div2").innerHTML=document.getElementById("bd_right_first_bottom_div1").innerHTML;
var time =setInterval(function(){
	var all=document.getElementById("bd_right_first_bottom_all");
	var div1=document.getElementById("bd_right_first_bottom_div1");
	if(all.scrollTop>div1.offsetHeight){
		all.scrollTop=0;
	}else{
		all.scrollTop++;
	}
},10);