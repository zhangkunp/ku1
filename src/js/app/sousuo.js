var form1 = document.querySelector(".sou> form")
var inp = form1.querySelector("input");
inp.onfocus = function(){
	form1.style.borderColor = "#e8ae3e";
}
inp.onblur = function(){
	form1.style.borderColor = "#cccccc";
}