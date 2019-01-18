'use strict';

/**
 * Created by huangiris on 2019/1/12.
 */
$(function () {
  function GetQueryString(name)

  {

    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if(r!=null)return  unescape(r[2]); return null;

  }
  var id = GetQueryString("productId");
  // console.log(id);
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getproduct',
    data:{
      productid:id
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      $('.product_bijia').html(template('cateTpl',info));
      var proName = info.result[0].productName.split(' ')[0];
       // console.log(proName);
      // 三级分类的渲染
      $('.cate').html(template('pro_tmp',{list:proName}));
      $('.product_bijia').html(template('duct_tmp',info));
      // 京东商城渲染
    }
  });
  $.ajax({
    url:"http://127.0.0.1:9090/api/getproductcom",
    type:"get",
    dataType:"json",
    data:{
      productid:id
    },
    success:function (info) {
      // console.log(info);
      var htmlStr = template("commonTpl",info);
        $(".commont_content ul").html(htmlStr)
    }
  })
})