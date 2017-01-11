var lis2 = document.querySelectorAll(".nav li");

for(var i = 0; i < lis2.length; i++){
	lis2[i].index = i;
	lis2[i].onclick = function(){
	  for(var j = 0; j < lis2.length; j++){
	  	lis2[j].style.borderBottom = "1px solid #ccc";
	  }
	  this.style.borderBottom = "1px solid #666666"
	}
}

var lis3 = document.querySelectorAll(".form2 li");

for(var i = 0; i < lis3.length; i++){
	lis3[i].index = i;
	lis3[i].onclick = function(){
	  for(var j = 0; j < lis3.length; j++){
	  	lis3[j].style.borderBottom = "1px solid #ccc";
	  	lis3[j].style.color = "black";
	  }
	  this.style.borderBottom = "4px solid red"
	  this.style.color = "red";
	}
}