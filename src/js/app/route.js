var shop = angular.module("shop",["cart","ngRoute"])
  .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
      $locationProvider.html5Mode(false).hashPrefix('');  //解决1.6的路由地址冲突
      //在此进行路由
      $routeProvider
      .when("/btn1",{
        templateUrl:"/html/shouye.html"
      })
      .when("/btn2",{
        templateUrl:"/html/chaoshi.html"
      })
      .when("/btn3",{
        templateUrl:"/html/yuding.html"
      })
      .when("/btn4",{
        templateUrl:"/html/shoppingcar.html"
      })
      .when("/btn5",{
        templateUrl:"/html/myhao.html"
      })
      .when("/btn6",{
        templateUrl:"/html/sousuo.html"
      })
      .when("/btn7",{
        templateUrl:"/html/miaosha.html"
      })
      .when("/btn8",{
        templateUrl:"/html/myform.html"
      })
      .when("/btn9",{
        templateUrl:"/html/integral.html"
      })
      .otherwise({
  	   	   redirectTo:"/btn1"  //默认到根目录
  	   })

    }])