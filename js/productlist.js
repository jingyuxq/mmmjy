'use strict';

/**
 * Created by huangiris on 2019/1/11.
 */
$(function () {
  function GetQueryString(name)

  {

    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if(r!=null)return  unescape(r[2]); return null;

  }
  var id = GetQueryString("categoryid");
   console.log(id);
  $.ajax({
    url:"http://127.0.0.1:9090/api/getcategorybyid",
    type:"get",
    dataType:"json",
    data:{
      categoryid:id
    },
    success:function (info) {
       console.log(info);
      var htmlStr = template("categoryTPL",info);
      $('.name').html(htmlStr);
    }
  });
  var page = 1;
  var pageall;
  function render() {
    $.ajax({
      url:"http://127.0.0.1:9090/api/getproductlist",
      type:"get",
      dataType:"json",
      data:{
        categoryid:id,
        pageid:page
      },
      success:function (info) {
        console.log(info);
        var htmlStr = template("categoryTplall",info);
        $(".all").html(htmlStr);
        pageall = Math.ceil(info.totalCount/10);
        $(".mui-content-padded  input").val(page +"/"+ pageall)

      }
    });
  }
   render();
  $(".mui-next").click(function () {
    if(page === pageall){
      return
    }
    page++;
    render()
  });
  $(".mui-previous").click(function () {
    if(page === 1){
      return
    }
    page--;
    render()
  });
  // $(".container ul").on("click","li",function () {
  //
  // })

});