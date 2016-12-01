function lineHeight() {
  $('.menu_top').each(function(){
    var This = $(this);
    var height = This.css('height');
    var line = This.css('line-height');
    var rapport = '';
      if(parseInt(height) > 60) {
        rapport = 60 / (parseInt(height) / 60);
        This.css('line-height',rapport+'px');
      }
  })
}
function Slide() {
  $('.menu_top').each(function(){
    var This = $(this);
    var height = This.css('height');
    var line = This.css('line-height');
    var data = This.data('number');
    This.click(function(){
      $('.menu_down').each(function(){
        var Me = $(this);
        var dat = Me.data('number');
        if(dat == data) {
          if(Me.is( ":hidden" )) {
            $('.menu_down').slideUp("slow");
            Me.slideDown("slow");
          }else{
            Me.slideUp("slow");
          }
        }
      })
    })
    /* ajustement line-height */
  })
}
function alignCircle() {
  $('.cell1').each(function(){
    var height = parseInt($(this).find('.textone').height()) + 60;
    $(this).find('.middle1').css('height',height+'px');
  })
  $('.cell2').each(function(){
    var height = parseInt($(this).find('.textwo').height()) + 60;
    $(this).find('.middle2').css('height',height+'px');
  })
  $('.cell3').each(function(){
    var height = parseInt($(this).find('.textwo').height()) + 60;
    $(this).find('.middle3').css('height',height+'px');
  })
}
$(document).ready(function(){
  alignCircle();
  Slide();
  lineHeight();
})
console.log()
$(window).resize(function(){
  alignCircle();
  lineHeight();
})
$(document).on('DOMNodeInserted', function(e) {
  lineHeight();
})
