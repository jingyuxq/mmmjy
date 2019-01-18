'use strict';

/**
 * Created by huangiris on 2019/1/14.
 */
$(function () {
  function GetQueryString(name)

  {

    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if(r!=null)return  unescape(r[2]); return null;

  }
  var id = GetQueryString("brandTitleId");
  console.log(id);
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbrand",
    dataType:"json",
    type:"get",
    data:{
      brandtitleid:id
    },
    success:function (info) {
      console.log(info);
      $(".brand_search ul").html(template("titleTpl",info));
    }
  })
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbrandtitle",
    dataType:"json",
    type:"get",
    success:function (info) {
      var str = info.result[id].brandTitle;
      var name = str.substring(0, str.length - 4);
      // console.log(name);
      $(".nav_box span").text(name)
    }
  })
})