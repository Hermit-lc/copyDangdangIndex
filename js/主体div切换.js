var divs = document.getElementById("bd_center_two").getElementsByTagName("div");
	for(var i=0;i<lis.length;i++){
		divs[i].onmouseover = function(){
			//隐藏div
			var divs = document.getElementById("bd_center_two").getElementsByTagName("div");
			for(var y=0;y<divs.length;y++){
				divs[y].style.display = "none";
			}
			
			for(var n=0;n<ls.length;n++){
				document.getElementById("bd_center_two_div"+this.value).style.display = "block";
			}
		}
	}