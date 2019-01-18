'use strict';

/**
 * Created by huangiris on 2019/1/13.
 */
$(function () {
  function GetQueryString(name)

  {

    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if(r!=null)return  unescape(r[2]); return null;

  }
  var id = GetQueryString("couponId");
  // console.log(id);
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    type:"get",
    dataType:"json",
    data:{
      couponid:id
    },
    success:function (info) {
      // console.log(info);
      var len;
       $(".info ").html(template("productTpl",info));
      $(".info").on("click","li",function () {
        var id = $(this).data("id");
         len  = info.result.length;
        $(".mm_madle").show();
        $(".mm_madle .img_box").html(info.result[id].couponProductImg)
      });
      $(".arrow_right").click(function () {
        if(id < len-1){
          id++;
          $(".mm_madle .img_box").html(info.result[id].couponProductImg)
        }
      })
      $('.arrow_left').click(function () {
        if(id >= 0){
          id--;
          $(".mm_madle .img_box").html(info.result[id].couponProductImg)
        }
      })
    }
  });

})