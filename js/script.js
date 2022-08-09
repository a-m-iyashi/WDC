
  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");  //出発地点取得
    var target= $(href == "#" || href == "" ? 'html' : href);  //到着地点取得
    var position = target.offset().top;  //到着地点をtopからの数値で取得
    $("html,body").animate({scrollTop:position}, 600, "swing");
  });
  
  //ページトップへ戻る
  var $pageTop = $(".c-pageTop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
  