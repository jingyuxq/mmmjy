'use strict';

/**
 * Created by huangiris on 2019/1/11.
 */
$(function () {
  $.ajax({
    url:"http://127.0.0.1:9090/api/getindexmenu",
    type:"get",
    dataType:"json",
    success:function (info) {
       // console.log(info);
      var htmlStr = template("navTpl",info);
      // console.log(htmlStr)
      $(".mmm_nav ul").html(htmlStr)
    }
  });
  $.ajax({
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    type:"get",
    dataType:"json",
    success:function (info) {
      // console.log(info);
      var htmlStr = template("productTpl",info);
      $(".mmm_product_info").html(htmlStr)

    }
  });
  var flag = true;
  var more = $('[data-id="7"]');
  $(".mmm_nav ul").on("click",more,function () {
    // alert(1)
    if (flag) {
      $(' li[data-type="1"]').slideDown()
    } else {
      $('li[data-type="1"]').slideUp()
    }
    flag = !flag
  })
})