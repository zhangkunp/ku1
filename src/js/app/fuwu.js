//创建一个购物车模块
angular.module("cart",[])
.factory("cart",function(){   //购物车的服务
	var cartDate = [];
	return {
        addProduct:function(id,name,img,price){  //把商品添加到购物车中
        	var addedExistItem =false;  //是否已经在购物车中存在
        	//遍历数组
        	for(var i = 0; i < cartDate.length; i++){
        		if(cartDate[i]["id"]==id){
        			cartDate[i].count++;
        			addedExistItem = true;
                                console.log(cartDate[i])
        			break;
        		}
        	}
        	if(!addedExistItem){   //如果该商品没在购物车中
        		cartDate.push({
        			id:id,
        			name:name,
        			img:img,
        			price:price,
        			count:1
        		})
        	}

        },
        removeProduct:function(name){   //删除商品
        	for(var i = 0; i < cartDate.length; i++){
        		if(cartDate[i]["name"] == name){
                                cartDate[i].count--;
                                if(cartDate[i].count == 0){
                                  cartDate.splice(i,1);
                                }
        			break;
        		}
        	}
        },
        getProducts:function(){   //获取购物车里的所有数据
        	return cartDate;
        }
	}
})