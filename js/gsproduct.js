'use strict';

/**
 * Created by huangiris on 2019/1/14.
 */
$(function () {
  // $(".nav_left>ul>li").eq(2).click(function () {
  //   console.log(2);
  // })
  // $(".nav_left>ul>li").click(function () {
  //   $(".nav_left>ul>li").each(function () {
  //     console.log($(".nav_left>ul>li").eq(2));
  //   })
  // })
  $.ajax({
    url:"http://127.0.0.1:9090/api/getgsshop",
    type:"get",
    dataType:"json",
    success:function (info) {
      // console.log(info);
      $(".first>ul").html(template("jdTpl",info))
    }
  })
  var shopid = 1;
  var areaid = 1;
  $.ajax({
    url:"http://127.0.0.1:9090/api/getgsshoparea",
    dataType:"json",
    type:"get",
    success:function (info) {
      // console.log(info);
      $(".two>ul").html(template("hbTpl",info))
    }
  });
  $(".nav_left>ul>li").click(function () {
    $(this).siblings().find('ul').removeClass("show");
     $(this).find('ul').toggleClass("show");

  });
  function render(shopid,areaid) {
    $.ajax({
      url:"http://127.0.0.1:9090/api/getgsproduct",
      type:"get",
      dataType:"json",
      data:{
        shopid : shopid,
        areaid : areaid,
      },
      success:function (info) {
        $(".product_list ul").html(template("productTpl",info))

      }
    })
  }
   render(shopid,areaid);
  $(".first").on("click","li",function () {
       shopid = $(this).data("shopid");
  });
  $(".two").on("click","li",function () {
    areaid = $(this).data("areaid");
    render(shopid,areaid);
  });
});