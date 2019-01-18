'use strict';

/**
 * Created by huangiris on 2019/1/14.
 */
$(function () {
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbrandtitle",
    dataType:"json",
    type:"get",
    success:function (info) {
      console.log(info);
      $(".nav_title ul").html(template("titleTpl",info))
    }
  })
})