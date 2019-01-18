'use strict';
/**
 * Created by huangiris on 2019/1/13.
 */
$(function () {
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 ,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    scrollY: false, //是否竖向滚动
    scrollX: true,
    startX: 0, //初始化时滚动至x
    startY: 0, //初始化时滚动至y
    indicators: true, //是否显示滚动条
    bounce: true //是否启用回弹
  });
  function render(id) {
    $.ajax({
      url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
      dataType:"json",
      type:"get",
      data:{
        titleid:id
      },
      success:function (info) {
        // console.log(info);
        $(".bargain_conttent ul").html(template("con_tmp",info))
      }
    })
  }
  render(0);
  $.ajax({
    url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
    type:"get",
    dataType:"json",
    success:function (info) {
      // console.log(info);
      $(".mui-scroll ul").html(template("navTpl",info));
      $(".mui-scroll ul").on("click","a",function () {
        $(this).parent().siblings().removeClass("current");
        $(this).parent().addClass("current");
        var id = $(this).data("id");
        render(id)
        // console.log(id);
      })
    }
  });

});
