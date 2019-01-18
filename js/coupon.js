'use strict';

/**
 * Created by huangiris on 2019/1/13.
 */
$(function () {
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcoupon",
    type:"get",
    dataType:"json",
    success:function (info) {
      console.log(info);
      $(".title ul").html(template("titleTpl",info))
    }
  })
})