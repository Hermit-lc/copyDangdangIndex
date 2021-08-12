var lis = document.getElementById("hd_first_right_ul").getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
	lis[i].onmouseover = function(){
		this.getElementsByTagName("div")[0].style.display = "block";
	}
	lis[i].onmouseout = function(){
		this.getElementsByTagName("div")[0].style.display = "none";
	}
}
