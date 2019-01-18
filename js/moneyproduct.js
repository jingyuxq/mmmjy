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
  var id = GetQueryString("productid");
  console.log(id);
  $.ajax({
    url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    type:"get",
    dataType:"json",
    data:{
      productid:id
    },
    success:function (info) {
       console.log(info);
      var htmlStr = template("place",info);
      $(".product_container1").html(htmlStr);
      var htmlStr1 = template("zdplace",info);
      $(".pace").html(htmlStr1);
      var htmlStr2 = template("comment",info);
      $(".comment").html(htmlStr2)
    }
  });


})