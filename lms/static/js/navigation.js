function rightMenuUser() {
  var widthCorp = $('#nav-up-up').css('width');
  var largeurEcran = $(window).width();
  //var marginCorp = parseInt(parseInt(largeurEcran) - parseInt(widthCorp)) / 2;
  var marginCorp = parseInt($('#nav-up-up').css('margin-right'));
  var url = window.location.href;
  var Right = marginCorp - 2;
  if(parseInt(largeurEcran) > 1440) {
    $('.menu-for-user').css('right',Right+'px');
  }else {
    $('.menu-for-user').css('right','0');
  }
}
function languages() {
  $('#show_languages').click(function(){
    $('.language-selector').toggle();
  })
}
function navAllIndex() {
  $('#menu-top-off,#button-menu-low-rez').click(function(){
    $('.menu-for-user').toggle();
  });
  $('#menu-table').click(function(){
    var navHeight = parseInt($('#nav-up-up').height());
    var navWidth = parseInt($('#nav-up-up').width());
    var globalNav = parseInt($('#global-navigation').height());
    var navSubHeight = parseInt($('#sous-menu-table').height());
    $('#sous-menu-table').toggle();
  })
}
function inputSearchDisaplay() {
  var width = $(window).width();
  if(width > 557 || width < 768) {
    $('.picto-low-res').find('a').click(function(){
      $('#search_ipad').toggle();
    })
  }else{
    $('#search_ipad').attr('style','');
  }
}
  $(document).ready(function(){
    navAllIndex();
    languages();
    rightMenuUser();
    $('#input_search_nav').css('height','24px');
    $('#input_search_nav').css('width','258px');
    $('#input_search_nav').css('padding-left','10px');
    $('#input_search_nav').css('margin-top','5px');
    inputSearchDisaplay();
  })
  $(window).resize(function(){
    rightMenuUser();
    inputSearchDisaplay();
    if(parseInt($('#nav-up-up').width()) > 981)
    {
      $('#sous-menu-table').hide();
      if(parseInt($('#nav-up-up').width()) > 555)
      {
        $('#nav-up-up').css('height','104px');
        $('#global-navigation').css('height','135px');
        $('#menu-table').css('color','#000');
        $('#menu-table').css('background-color','#F5F6F8');
      }else{
        $('#nav-up-up').css('height','104px');
        $('#global-navigation').css('height','104px');
        $('#menu-table').css('color','#000');
        $('#menu-table').css('background-color','#F5F6F8');
      }
    }
  })
