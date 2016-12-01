function bougerDiv() {
  var Details = $('.details');
  var DMenu = $('.course-sidebar');
  if(parseInt($(document).width()) < 769) {
    $('.details').before($('.course-sidebar'));
  }else{
    $('.course-sidebar').before($('.details'));
  }
}
function starShip() {
  if(parseInt($(document).width()) < 392) {
    $('#course-rate').css('margin-left','0px');
  }else{
    $('#course-rate').css('margin-left','10px');
  }
}
function mailTo() {
  var title = '';
  var href = window.location.href;
  var doc = "J'ai pensé que cette formation pourrait vous intéresser";
  var text = "mailto:?subject=Philéas - ${course.display_name_with_default}&body="+doc+'   https://'+href;
  $('#mailtoo').attr('href',text);
}
function formateur() {
  $('.teacher-up').find('h3').each(function(){
    var height = parseInt($(this).height());
    var lineHieght = parseInt($(this).css('line-height'));
    var borne = 50;
    var i = 0;
    var n = 0;
    if(height > 50) {
      for(i;i<50;i++) {
        var heights = parseInt($(this).height());
        var lineHieghts = parseInt($(this).css('line-height'));
        if(heights > 50) {
          lineHieghts = lineHieghts - (n + 1);
          $(this).css('line-height',lineHieghts+'px');
          n++;
          i++;
        }else{
          i = 51;
        }
      }
    }else if(height < 50) {
      for(i;i<50;i++) {
        var heights = parseInt($(this).height());
        var lineHieghts = parseInt($(this).css('line-height'));
        if(heights < 50) {
          lineHieghts = lineHieghts + (n + 1);
          $(this).css('line-height',lineHieghts+'px');
          n++;
          i++;
        }else{
          i = 51;
        }
      }
    }
  })
  $('.teacher-up').find('p').each(function(){
    var height = parseInt($(this).height());
    var lineHieght = parseInt($(this).css('line-height'));
    var borne = 50;
    var i = 0;
    var n = 0;
    if(height > 50) {
      for(i;i<50;i++) {
        var heights = parseInt($(this).height());
        var lineHieghts = parseInt($(this).css('line-height'));
        if(heights > 50) {
          lineHieghts = lineHieghts - (n + 1);
          $(this).css('line-height',lineHieghts+'px');
          n++;
          i++;
        }else{
          i = 51;
        }
      }
    }else if(height < 50) {
      for(i;i<50;i++) {
        var heights = parseInt($(this).height());
        var lineHieghts = parseInt($(this).css('line-height'));
        if(heights < 50) {
          lineHieghts = lineHieghts + (n + 1);
          $(this).css('line-height',lineHieghts+'px');
          n++;
          i++;
        }else{
          i = 51;
        }
      }
    }
  })
}
function callAjax() {
  $.ajax({
    type: "POST",
    url: '/search/course_discovery/',
    data:{
      id:'${course.id}',
    },
    dataType: 'json',
    success: function(data) {
      var lang = data.results[0].data.language
      if(lang) {
        if(lang == 'fr') {
           $('#langues_insert').html('${_("French")}');
        }else if(lang == 'en') {
          $('#langues_insert').html('${_("English")}');
        }else{
          $('#langues_insert').html('');
        }
      }
    }
  })
}
function getEmail() {
  $('.teacher-image').each(function(){
    var This = $(this);
    console.log(This.data('email'));
    if(This.data('email')) {
      This.append('<a href="mailto:'+This.data('email')+'" class="teacher_mail"><img src="/static/themes/phileastheming/images/icon_mail2.png"></a>');
    }
  })
}
$(document).ready(function(){
  $('.course-staff').append('<article style="clear:left;"></article>');
  mailTo();
  getEmail();
  bougerDiv();
  starShip();
  disableLog();
})
$(window).resize(function(){
  bougerDiv();
  starShip();
})
