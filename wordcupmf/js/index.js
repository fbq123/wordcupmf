$(function() {
  function getCurrentPage(){
    var current =0;
    var screenClassStr = $('.screen').attr('class');
    if(screenClassStr.indexOf('screen_')<0){
      current =0;
    } else if (screenClassStr.indexOf('screen_x90')>=0) {
      current =1;
    } else if (screenClassStr.indexOf('screen_x180')>=0) {
      current =2;
    } else if (screenClassStr.indexOf('screen_x270')>=0) {
      current =3;
    }
    return current;
  }

  setTimeout(function(){
    $('.load').css('display','none');
    $('.global').css('display','block');
  },2000);

  $("#js_tab_menu li").click(function(){
    $("#js_tab_menu li.on").removeClass("on");
    $(this).addClass("on");
    var index = $(this).index();
    $('.conitem').css('display','none');
    $('.conitem').eq(index).css('display','block');
  });

  $('.layer,.screen,.storyboard').css('width',window.innerWidth);
  $('.layer,.screen,.storyboard').css('height',window.innerHeight);
  $('.btn').click(function() {
    $(this).addClass('btnAnimate');
    if($(this).hasClass('btn1')) {
      $('.screen').attr('class','screen ease screen_x90');
    } else if ($(this).hasClass('btn2')) {
      $('.screen').attr('class','screen ease screen_x180');
      $('.layer3 .inner').addClass('animate');
    } else if ($(this).hasClass('btn3')) {
      $('.screen').attr('class','screen ease screen_x270');
    }

    if($(this).hasClass('btn4')) {
      $('.story').css('display','block');
      $('.storyshadow').css('display','block');
      $('.full_screen').addClass('animated').addClass('bounceIn');
    }
  });

  $('.close').click(function() {
    $('.story').css('display','none');
    $('.storyshadow').css('display','none');
  });

  var screen = document.querySelector('.screen');
      // Transform(section1);
  var gesTure = new AlloyFinger(screen,{
    swipe:function(evt){
      // console.log('swipe'+evt.direction);
      var direction = evt.direction;
      var current = getCurrentPage();

      if(direction == 'Up'){
        switch (current) {
          case 0:
            $('.btn1').click();
            break;
            case 1:
              $('.btn2').click();
              break;
            case 2:
              $('.btn3').click();
              break;
            case 3:
              $('.screen').attr('class','screen ease');
              break;
        }
        // $('.btn1').click();
        // console.log('Up');
      } else if (direction == 'Down') {
          switch (current) {
            case 0:
              $('.btn3').click();
              break;
            case 1:
              $('.screen').attr('class','screen ease');
              break;
            case 2:
              $('.btn1').click();
              break;
            case 3:
              $('.btn2').click();
              break;
          }
      }
    }
  });


//   $('#js_tab_menu li').click(function() {
//    $('#js_tab_menu li').removeClass('on');
//    $(this).addClass('on');
//    var liIndex = $('#js_tab_menu li').index(this);
//    $('.conitem').css('display','none');
//    $('.inner').addClass('animate');
//    if(liIndex == 0) {
//      $('.conitem.one').css('display','block');
//    } else if(liIndex == 1) {
//      $('.conitem.two').css('display','block');
//    } else if(liIndex == 2) {
//      $('.conitem.three').css('display','block');
//    } else if(liIndex == 3) {
//      $('.conitem.four').css('display','block');
//    }
//  });

  // $('.layer1 .btn').click(function() {
  //   if($(this).hasClass('btn4')) {
  //     return;
  //   }
  //   $(this).addClass('btnAnimate');
  //   var self = this;
  //   setTimeout(function() {
  //     $(self).removeClass('btnAnimate');
  //   },2000);
  // })
});
