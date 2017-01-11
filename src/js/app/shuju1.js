angular.module("shop")
  .constant("dataUrl","http://localhost:8866/hot")
  .controller("myCtrl",function($scope,$http,dataUrl,cart){   //首页控制器：获取首页数据
  	  $http.get(dataUrl).then((data)=>{
  	  	$scope.shuju = data.data.data;
  	  	console.log($scope.shuju);
  	  },(error)=>{
  	  	$scope.error = error;
        console.log(error)
  	  });
      //轮播图
      var swiper = new Swiper('#lunbo1 .swiper-container', {
       pagination: '#lunbo1 .swiper-pagination',
       
       paginationClickable: true,
       centeredSlides: true,
       autoplay: 2500,
       autoplayDisableOnInteraction: false,
       observer:true,
       observerParents:true
      });

      var swiper2 = new Swiper('.xinxi>.swiper-container', {
            pagination: '.xinxi .swiper-pagination',
            paginationClickable: true,
            autoplay:2000,
            direction: 'vertical'
      });

      $scope.hqcount = function(name){   //从购物车里的获取商品的数量
          for(var i = 0; i < cart.getProducts().length; i++){
            if(cart.getProducts()[i]["name"] == name){
              return cart.getProducts()[i]["count"]
            }
          }
      }   
      $scope.shanchu = function(prod){
         cart.removeProduct(prod.name)
      }
      $scope.tianjia = function(prod){
         cart.addProduct(prod.id,prod.name,prod.img,prod.price)
      }
  })


  .controller('hqCtrl',function($scope,cart){   //购物车里面的控制器：设置购物车里面的商品
     $scope.cartDate = cart.getProducts();
     $scope.total = function(){
        var sum = 0;
        for(var i = 0; i < $scope.cartDate.length; i++){
          sum += ($scope.cartDate[i]["price"] * $scope.cartDate[i]["count"]);
        }
        return sum;
     } 
     $scope.shanchu = function(prod){
         cart.removeProduct(prod.name)
      }
      $scope.tianjia = function(prod){
         cart.addProduct(prod.id,prod.name,prod.img,prod.price)
      }
  })


  .constant("dataUrl2","http://localhost:8866/seckill")
  .controller("myCtrl2",function($scope,$http,dataUrl2){  //获取疯狂秒杀数据
  	  var shuju2 = null;
  	  $http.get(dataUrl2).then((data2)=>{   
  	  	$scope.shuju2 = data2.data.product;
  	  	console.log($scope.shuju2);
  	  },(error)=>{
  	  	$scope.error = error;
        console.log(error)
  	  })
  	  $scope.yanse = function(se){   //设置颜色
  	  	if(se == "即将开抢" || se == "已抢光"){
           return ""
  	  	}else{
  	  	   return "yan"
  	  	}
  	  }
  })
  .controller("myCtrl3",function($scope,$http){  //获取闪送超市数据
      $scope.dataUrl3 = "http://localhost:8866/bread";
      $scope.diaoyong = function(){
        $http.get($scope.dataUrl3).then((data3)=>{   
          $scope.shuju3 = data3.data.data;
          console.log($scope.shuju3);
        },(error)=>{
          $scope.error = error;
          console.log(error)
        })
      }
      $scope.diaoyong()
      $scope.zhuanh = function(abc){
         $scope.dataUrl3 = "http://localhost:8866/"+abc;
         $scope.diaoyong()
      }  
      // 点击右侧列表切换颜色
      var lis = document.querySelectorAll(".leftce>ul li");
      for(var i = 0; i < lis.length; i++){

        lis[i].index = i;
        lis[i].onclick = function(){
          for(var j = 0; j < lis.length; j++){
            lis[j].style.borderLeft = "none";
          }
          this.style.borderLeft = "6px solid #ffd600"
        }
      }
  })
  .constant("dataUrl4","http://localhost:8866/reserve")
  .controller("myCtrl4",function($scope,$http,dataUrl4){  //获取新鲜预定数据
      $http.get(dataUrl4).then((data4)=>{   
        $scope.shuju4 = data4.data.product;
        console.log($scope.shuju4);
      },(error)=>{
        $scope.error = error;
        console.log(error)
      })
      
  })