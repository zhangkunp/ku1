//设置轮播图里图片的高度和固定定位
var lunboimg = document.querySelectorAll(".swiper-slide>img")

window.onload = function(){
   	  lunboimg[0].style.height = lunboimg[1].offsetHeight+"px";
      lunboimg[5].style.height = lunboimg[1].offsetHeight+"px";
}
window.onresize = function(){
	lunboimg[0].style.height = lunboimg[1].offsetHeight+"px";
  lunboimg[5].style.height = lunboimg[1].offsetHeight+"px";
}