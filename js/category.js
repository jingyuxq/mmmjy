'use strict';

/**
 * Created by huangiris on 2019/1/11.
 */
$(function () {
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcategorytitle",
    type:"get",
    dataType:"json",
    success:function (info) {
       // console.log(info);
      var htmlStr = template("infoTpl",info);
      $(".mmm_info ul").html(htmlStr);
      $(".iiid").on("click","a",function () {
        var titleid = $(".info_title").data("id");
        console.log(titleid);
        $(this).next().toggleClass("move");
        $.ajax({
          url:"http://127.0.0.1:9090/api/getcategory",
          type:"get",
          dataType:"json",
          data:{
            titleid:titleid
          },
          success:function (info) {
            // console.log(info);
            var htmlStr = template("categoryTpl",info);
            $(".mmm_info_category").html(htmlStr)
          }
        })
      });
    }
  });

})