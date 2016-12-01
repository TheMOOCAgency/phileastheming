function apparitionBouton() {
  $('.tab').each(function(){
    if($(this).find('a').attr('href') == '') {
      $(this).hide();
    }
  })
}
/* action sur la page discution */
function addMarginNavForum(){
  var url = window.location.href;
  if(url.indexOf('/discussion/forum') != -1){
    $('.tab').find('img').css('margin-top','15px');
    $('.sur_menu_courseware').css('bottom','-26px');
    $('.tabs').css('padding-top','6px');
    $('#global-navigation').css('background-color','#EEF1F2');
  }
}
/* fin action page discution */
function Active_course_navigation() {
  $('.tab').children('a').each(function(){
    var url = $(this).attr('href');
    var Class = $(this).attr('class');
    if(url.indexOf(Class) == -1) {
      $(this).css('color', '#445561')
    }else {
      $(this).css('color', '#8A4186');
    }
  })
}
function alignerImg() {
  $('.tab').children('img').each(function(){
    var height = $(this).height();
    if(parseInt(height) < 19) {
      var marginTop = (parseInt(46) - parseInt(height)) / 2;
      $(this).css('margin-top',marginTop+'px');
    }else{
      var marginTop = (parseInt(42) - parseInt(height)) / 2;
      $(this).css('margin-top',marginTop+'px');
    }
  })
}
function renamecours() {
  $('.tab').find('a').each(function(){
    var This = $(this);
    var text = $(this).text();
    if(text.indexOf('Cours') != -1 && text.indexOf('Course') == -1) {
      console.log('coin');
      This.text('Formation');
    }
  })
}
$(document).ready(function(){
  Active_course_navigation();
  apparitionBouton();
  addMarginNavForum();
  renamecours();
  /*
  alignerImg();
  */
})
