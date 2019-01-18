'use strict';

/**
 * Created by huangiris on 2019/1/12.
 */
$(function () {
  var page = 1;
  var pageall;
  function render() {
    $.ajax({
      url:"http://127.0.0.1:9090/api/getmoneyctrl",
      type:"get",
      dataType:"json",
      data:{
        pageid:page
      },
      success:function (info) {
         console.log(info);
        var htmlStr = template("productTpl",info);
        // console.log(htmlStr);
        $(".mmm_product_info ul").html(htmlStr);
        pageall = Math.ceil(info.totalCount/10);
        $(".mui-content-padded  input").val(page +"/"+ pageall)
      }
    })
  }
  render();
  $(".mui-previous").click(function () {
    if(page === 1){
      return
    }
    page--;
    render()
  });
  $(".mui-next").click(function () {
    if(page === pageall){
      return
    }
    page++;
    render()
  });



});