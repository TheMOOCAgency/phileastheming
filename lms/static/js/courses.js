function eraseButton() {
  if(parseInt($(document).width()) <= 425) {
    $('#sort_by').text('');
  }else{
    $('#sort_by').text(sort_by);
  }
}
function TailleImage(){
  $('.course-image').each(function(){
    var This = $(this).children().children('img');
    Taille = $(this)
    var Src = $(this).children().children('img').attr('src');
    var img = new Image();
    var tailleWidth = $(this).width();
    var tailleHeight = $(this).height();

    img.src = Src;
    var imgWidth = img.width;
    var imgHeight = img.height;
    var Org = Taille.data('org');
    if(imgWidth < tailleWidth && imgHeight < tailleHeight && Org == 'Vodeclic')
    {
      marginTop = (tailleHeight - imgHeight)/2;
      marginLeft = (tailleWidth - imgWidth)/2;
      This.css('width',imgWidth+'px');
      This.css('height',imgHeight+'px');
      This.css('padding-top',marginTop+'px');
      This.css('padding-bottom',marginTop+'px');
      This.css('padding-left',marginLeft+'px');
      This.css('padding-right',marginLeft+'px');
      This.css('background-color','#fff');
      Taille.css('background-color','#fff');
    }
  })
}
function vodeclicCall() {
  var url = window.location.href;
  if(url.indexOf('Vodeclic') != -1) {
    $('body').hide();
    var source = '';
    var boucle = setInterval(function(){
      source = $('#discovery-message').text();
      if(source != ''){
        clearInterval(boucle);
      $('.discovery-button').each(function(){
        if($(this).data('value') == 'Vodeclic'){
          $(this).trigger('click');
          $('body').show();
        }
      })
    $(document).show();
    }
    },500);
  }
}
function lineH2() {
  $('.course-name').each(function(){
    This = $(this);
    var height = parseInt(This.height());
    var line = parseInt(This.css('line-height'));
    if(height > 56) {
      var css = '';
      var i = 0;
      var n = 0;
      for(i;i<height;i++) {
        var heights = parseInt(This.height());
        var lines = parseInt(This.css('line-height'));
        if(heights > 56) {
          n = n +1;
          css = 56 / n;
          This.css('line-height',css+'px');
        }else{
          i = height;
        }
      }
    }else{
      var css = '';
      var i = 0;
      var n = 0;
      for(i;i<height;i++) {
        var heights = parseInt(This.height());
        var lines = parseInt(This.css('line-height'));
        if(heights < 56) {
          n = n + 1;
          css = lines + 1;
          This.css('line-height',css+'px');
        }else{
          i = height;
        }
      }
    }
  })
}
function imgAutre() {
  $('.imgFont').each(function(){
    var This = $(this);
    var Img = This.find('img');
    var width = parseInt(This.width());
    var height = parseInt(This.height());
    var imgWidth = parseInt(Img.width());
    var imgheight = (width/375)*200;
    var paddingLeft = 0;
    if(imgWidth < 300 && height < 187.5) {
      paddingLeft = (width - imgWidth)/2;
    }else{
      paddingLeft = 0;
    }
    paddingTop = (187.5 - imgheight)/2;
    Img.css('padding-top',paddingTop+'px');
    Img.css('padding-bottom',paddingTop+'px');
    Img.css('padding-left',paddingLeft+'px');
    Img.css('padding-right',paddingLeft+'px');
  })
}
function langStick() {
  $('article').each(function(){
    var This = $(this);
    var width = parseInt(This.find('.cover-images').children('img').width());
    var left = parseInt(This.find('.cover-images').children('img').css('margin-left'));
    var cible = This.find('.lang_stat');
    cible.css('left',left+'px');
  })
}
$(document).ready(function(){
  eraseButton();
  TailleImage();
  vodeclicCall();
  lineH2();
  imgAutre();
  $('#sort_by').click(function(){
    $('#table_search').toggle();
    if($(this).hasClass('picto_down_arrow')){
      $(this).removeClass('picto_down_arrow');
      $(this).addClass('picto_up_arrow');
    }else{
      $(this).removeClass('picto_up_arrow');
      $(this).addClass('picto_down_arrow');
    }
  })
  $('.search-facets-lists').find('button').each(function(){
    if($(this).data('value') == 'Vodeclic') {
      $(this).click();
    }
  })
})
$(document).resize(function(){
  eraseButton();
  TailleImage();
  lineH2();
  imgAutre();
})
