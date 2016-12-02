function bottomOl() {
  var heightOl = $('.course-tabs').height();
  if($(document).width() > 860) {
    if(heightOl == 43) {
      $('.sur_menu_courseware').css('bottom','-36px');
    }else if(heightOl == 97) {
      $('.sur_menu_courseware').css('bottom','-63px');
    }else if(heightOl == 126) {
      $('.sur_menu_courseware').css('bottom','-82px');
    }
  }else{
      $('.sur_menu_courseware').css('bottom','-72px');
  }

}
function lineHeightTitle() {
  var height = $('#titre_baniere_courseware').height();
  var font = parseInt($('#titre_baniere_courseware').css('font-size'));
  if(parseInt(height) > font) {
    $('#titre_baniere_courseware').css('line-height',font+'px');
  }
}
$(document).ready(function(){
  bottomOl();
  lineHeightTitle();
})
$(window).resize(function(){
  bottomOl();
  lineHeightTitle();
})
