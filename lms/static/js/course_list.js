function Largeur(){
  if($(document).width() >= 1440) {
    $('.courses-listing-item').css('margin-left','10px');
    $('.courses-listing-item').css('margin-right','10px');
    $('.courses-listing-item:first-child').css('margin-left','6px');
    $('.courses-listing-item:first-child').css('margin-right','14px');
    $('.courses-listing-item:last-child').css('margin-right','6px');
    $('.courses-listing-item:last-child').css('margin-left','14px');
  }else{
    $('.courses-listing-item').attr('style','');
  }
}
function lineH2() {
  $('.course-name').each(function(){
    This = $(this);
    var height = parseInt(This.height());
    var line = parseInt(This.css('line-height'));
    if(height > 50) {
      var css = '';
      var i = 0;
      for(i;i<height;i++) {
        var heights = parseInt(This.height());
        var lines = parseInt(This.css('line-height'));
        if(heights > 50) {
          if( lines > 24) {
            css = lines - 1;
            This.css('line-height',css+'px');
          }
        }else{
          i = height;
        }
      }
    }else{
      This.css('line-height',height+'px');
    }
  })
}
function heighth2() {
  var height = 56;
  var hauteur = 0;
  $('.course-name').css('height','auto');
  $('.course-name').each(function(){
    hauteur = $(this).height();
    hauteur = parseInt(hauteur);
    if(hauteur > height) {
      height = hauteur;
    }
  })
  $('.course-name').css('height',height+'px');
}
function heightcover() {
  var height = 0;
  var top = 0;
  $('.cover-images').each(function(){
    var hauteur = $(this).height();
    var Top = $(this).css('top');
    hauteur = parseInt(hauteur);
    Top = parseInt(Top);
    if(hauteur > height) {
      height = hauteur;
    }
    if(Top < top) {
      top = Top;
    }
  })
  height = height + (top/2);
  $('.course-image').css('height',height+'px');
}
function languagePos(){
  $('.language').each(function(){
    var heightParent = $(this).parent().height();
    heightParent = parseInt(heightParent);
    var height = $(this).height();
    height = parseInt(height);
    var paddingTop = $(this).css('padding-top');
    paddingTop = parseInt(paddingTop);
    var paddingBottom = $(this).css('padding-bottom');
    paddingBottom = parseInt(paddingBottom);
    var top = heightParent - height - paddingTop - paddingBottom -1;
    $(this).css('top',top+'px');
  })
}
 function imageFont() {
   $('.cover-images').each(function(){
     This = $(this);
     Img = This.find('img');
     width = parseInt(Img.width());
     height = parseInt(Img.height());
     console.log('hauteur : '+Img);
     left = parseInt(Img.css('margin-left'));
     if(!This.hasClass("VodeclicClass")) {
        This.find('.language').css('left',left+'px');
       if(width < 300) {
         This.addClass('backgrounds');
         padding = (187.5 - height)/2;
         Img.css('padding-top',padding+'px');
         Img.css('padding-bottom',padding+'px');
       }else{
         This.removeClass('backgrounds');
         Img.attr('style','');
       }
     }
   })
 }
 function marginVodeclic() {
   var width = $('.course-image').width();
   width = parseInt(width);
   var winwidth = parseInt($(window).width());
   $('.cover-images').each(function(){
     if(winwidth <= 486 && $(this).hasClass("VodeclicClass")) {
       covwidth = parseInt($(this).width());
       var marge = width - covwidth;
       marge = marge / 2;
       $(this).css('margin-left',marge+'px');
       $(this).css('margin-right',marge+'px');
     }else if(width >= 486 && $(this).hasClass("VodeclicClass")){
       $(this).attr('style','');
     }
   })
 }
$(document).on('DOMNodeInserted', function(e) {
    if ($(e.target).find('.course-name')) {
      heighth2();
    }
})
$(document).ready(function(){
  //coverImg();
  //TailleImage();
  Ajax();
  grille();
  lineH2();
  imageFont();
  languagePos();
  Largeur();
  marginVodeclic();
  $('li').css('clear','none');
  // creation du lien SHOW MORE DANS LES VIGNETTES
  $('article').each(function(){
        var org = $(this).data('org');
       if(org == 'Vodeclic') {
        $(this).addClass('register');
        $(this).find('.learn-more').addClass('register');
        $(this).find('.learn-more').css('color','#fff');
      }else{
        var Urls = $(this).attr('data-link');
        $(this).find('.learn-more').attr('href', Urls);
      }
  })
})
$(window).resize(function(){
  //coverImg();
  TailleImage();
  grille();
  lineH2();
  heighth2();
  imageFont();
  languagePos();
  marginVodeclic();
  $('li').css('clear','none');
  Largeur();
})
