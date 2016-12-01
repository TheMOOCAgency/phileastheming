
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
function couleurFont() {
  if(window.location.href.indexOf('/login') != -1) {
    if(parseInt($(window).width()) <= 425) {
      $('.content-wrapper').css('background-color', '#FFF');
    }else{
      $('.content-wrapper').css('background-color', '#FAFAFA');
    }
  }else{
    $('.content-wrapper').css('background-color', '#FAFAFA');
  }

  $('#global-navigation').css('background-color', '#FAFAFA');
}
function CssLast() {
  //$('.course-name').css('height','56px');
  if($(document).width() <= 786)
  {
    $('#table_search').css('position','relative');
    $('.no-course-discovery').css('margin-top','0px');
  }else{
    $('#table_search').css('position','absolute');
  }
}
/* ie 11 H1 bold */
function h1Ie11() {
  if(navigator.userAgent.indexOf("rv:11.0") != -1) {
    $('h1').css('font-weight','bold');
  }
}
/* deplacement add a post */
function clickPost() {
  $('#button-modifier').click(function(){
    $('.new-post-btn').trigger('click');
  })
}
function addPost() {
  var url = window.location.href;
  if(url.indexOf('forum') != -1) {
    $('.view-discussion-home').append('<button class="new-post-btn btn-neutral btn-small" id="button-modifier">Add a Post</button>');
    $('.new-post-btn').hide();
    $('#button-modifier').show();
    $('#button-modifier').css('float','right');
    clickPost();
  }
}
/* fix ipad */
function inputSearchFixIpad() {
  var width = parseInt($(window).width());
  var url = window.location.href;
  if((width == 1024) && (url.indexOf('/dashboard') != -1)) {
    $('#input_search_nav').css('height','34px');
    $('#input_search_nav').css('line-height','34px');
    $('#input_search_nav').css('padding-top','0');
    $('#input_search_nav').css('margin-top','0');
    $('#input_search_nav').css('margin-bottom','0');
    $('#input_search_nav').css('padding-bottom','0');
    $('form').css('height','34px');
  }else{
    $('#input_search_nav').attr('style','height:24px;margin-top:5px;');
  }
}
/* fix ipad */
/* fix iphone */
/* customise account Form */
function acountForm() {
  var url = window.location.href;
      if(url.indexOf('/u/') != -1){
	$(document).on('DOMNodeInserted', function(e) {
	 $('input[type="file"]').hide();
	})
      }
  if(url.indexOf('/account') != -1) {
    $(document).on('DOMNodeInserted', function(e) {
      $('#u-field-select-account_privacy').disable = false;
      $('.u-field-nam').hide();
      $('.u-field-nam').html('');
      $('.u-field-email').hide();
      $('.u-field-email').html('');
      $('.u-field-password').hide();
      $('.u-field-password').html('');
      $('.u-field-country').hide();
      $('.u-field-country').html('');
      if($('.section').text().indexOf("Additional Information") != -1) {
        $('.section:last-child').hide();
        $('.section:last-child').html('');
      }
    })
  }
  if(url.indexOf('/u/') != -1) {
    $(document).on('DOMNodeInserted', function(e) {
      $('#u-field-select-account_privacy').prop('disabled', false);
    })
  }
}
function accentDeconnexion() {
 var url = window.location.href;
 $('.menu-for-user').find('a').each(function(){
  var This = $(this);
  var text = This.text();
  if(text.indexOf('Deconnexion') != -1) {
   This.text('Déconnexion');
  }
 })
}
/*footer*/
function footerBottom() {
  var url = window.location.href;
  if(url.indexOf('login') != -1){
    $('.wrapper-footer').css('position','fixed');
    $('.wrapper-footer').css('bottom','0');
    $('.wrapper-footer').css('z-index','100000000');
  }
}
$(document).ready(function(){
  //accentDeconnexion();
  //acountForm();
  footerBottom();
  CssLast();
  h1Ie11();
  couleurFont();
  addMarginNavForum();
  addPost();
  inputSearchFixIpad();
  $('#input_search_nav').css('width','258px');
  $('#input_search_nav').css('padding-left','12px');
  $('#input_search_nav').css('padding-right','5px');
  $('#input_search_nav').css('border','none');
  $('#input_search_nav').css('box-shadow','none');
})
$(window).resize(function(){
  CssLast();
  inputSearchFixIpad();
  couleurFont();
  $('#input_search_nav').css('width','258px');
  $('#input_search_nav').css('padding-left','12px');
  $('#input_search_nav').css('padding-right','5px');
  $('#input_search_nav').css('border','none');
  $('#input_search_nav').css('box-shadow','none');
  $('#input_search_nav').css('margin-right','0');
})
