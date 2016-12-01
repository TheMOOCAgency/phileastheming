function ActionSiUneSection() {
  var nombre = $('.menu-item').length;
  if(parseInt(nombre) <= 1) {
    $('.course-index').hide();
  }
}
function menuPhone() {
    $('#active_menu').click(function(){
            if($('.course-index').css('display') == 'none') {
              $('.course-index').show();
              console.log('putain de display de mes couilles');
            }else{
              $('.course-index').hide();
            }
    })
  }

function sizeMenu() {
    if((parseInt($(window).width()) > 768) && (parseInt($(window).width()) != 1024)) {
            $('.course-index').attr('style','');
      }
}
function customRadioLabel(){
  var Cible = $('fieldset').attr('role','radiogroup').children('label');
  Cible.css('background-color','#fff');
  Cible.css('margin-bottom','3px');
  Cible.each(function(){
  var LocateRadio = $(this).attr('for');
  console.log($('input[name="LocateRadio"]'));

  })
  Cible.click(function(){
    $(this).parent().children('label').css('background-color','#fff');
    $(this).parent().children('label').css('color','#000');
    $(this).parent().children('label').css('border-color','transparent');
    $(this).css('color','#fff');
    $(this).css('background-color','#A2C126');
    $(this).css('border-color','#A2C126');
  })
}
function clearMarginFooter(){
  var url = window.location.href;
  if(url.indexOf('/courseware/') != -1){
    $('.wrapper-footer').css('margin-top','0px');
  }
}
$('fieldset').ready(function(){
  customRadioLabel();
  $('.check').click(function(){
    customRadioLabel();
  })
})
/* ipad fix */
  function ipadCourse() {
    var width = parseInt($(window).width());
    var url = window.location.href;
    if((width == 1024) && (url.indexOf('/courseware/') != -1)) {
      $('.course-index').css('width','310px');
      $('#active_menu').css('width','310px');
      $('#course-content').css('width','714px');
      $('#active_menu').hide();
    }else{
      $('.course-index').attr('style','');
      $('#active_menu').attr('style','');
    }
  }
/* end ipad fix */
$(document).ready(function(){
  clearMarginFooter();
  menuPhone();
  ActionSiUneSection();
  ipadCourse();
})
$(window).resize(function(){
  sizeMenu();
  ipadCourse();
})
