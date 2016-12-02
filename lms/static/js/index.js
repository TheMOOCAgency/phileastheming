$(document).ready(function(){
  $.ajax({
    type: "POST",
    url: '/search/course_discovery/',
    data:{
      coin: 'coin',
    },
    dataType: 'json',
    success: function(data) {
      var total = data.total;
      var time = parseInt(total) * 3;
      $('.nombre_apprenant_ajax').find('h4').html(all_user_inside_platform);
      $('.nombre_cours_ajax').find('h4').html(total+'+');
      $('.nombre_heure_ajax').find('h4').html(time+'+');
    }
  })
})
function callNews() {
  var News = '';
  var nombreNews = '';
  var This = $('.index-actualite-sous-section-1');
  var Links = '<style>@media(max-width:320px){#toute-les-actualite a{ margin-top: 0px;}}</style><div class="col-xs-12 col-md-12 col-sm-12 col-lg-12 bouton_decouverte" id="toute-les-actualite"><a href="/news/" >'+all_the_news+'</a></div>';
  $.ajax({
    type: "GET",
    url: '/api/news/',
    data:{
      n: '3',
      user_defined_order: '0',
      async: false,
    },
    dataType: 'json',
    success: function(data) {
      News = data.news;
      nombreNews = News.length;
      if(nombreNews == 0) {
        This.append(Links);
      }else if(nombreNews == 1){
        This.append('<style>@media(max-width:320px){#first_item{padding-top:0;margin-top:0}}</style><div class="section3_down col-xs-6 col-md-6 col-sm-6 col-lg-6" id="first_item"><div class="picto_section3_down" data-ordre="1" data-url="/news/detail/'+News[0].news+'/"><div style="background-image:url('+News[0].jacket+');" class="news1"></div></div><div class="text_section3_down" style="width: calc(100% - 154px);height: 100%;float: left;"><div class="text_section3_down_up">'+News[0].title+'</div><div class="text_section3_down_down">'+News[0].summary+'</div></div></div>');
        This.append(Links);
      }else if(nombreNews == 2) {
        This.append('<style>@media(max-width:320px){#first_item{padding-top:0;margin-top:0}}</style><div class="section3_down col-xs-6 col-md-6 col-sm-6 col-lg-6" id="first_item"><div class="picto_section3_down" data-ordre="1" data-url="/news/detail/'+News[0].news+'/"><div style="background-image:url('+News[0].jacket+');" class="news1"></div></div><div class="text_section3_down" style="width: calc(100% - 154px);height: 100%;float: left;"><div class="text_section3_down_up">'+News[0].title+'</div><div class="text_section3_down_down">'+News[0].summary+'</div></div></div>');This.append('<div class="section3_down col-xs-6 col-md-6 col-sm-6 col-lg-6" id=""><div class="picto_section3_down" data-ordre="2" data-url="/news/detail/'+News[1].news+'/"><div style="background-image:url('+News[1].jacket+');" class="news2"></div></div><div class="text_section3_down"><div class="text_section3_down_up">'+News[1].title+'</div><div class="text_section3_down_down">'+News[1].summary+'</div></div></div>');This.append(Links);
      }else if(nombreNews == 3) {
        This.append('<style>@media(max-width:320px){#item_news_3{margin-bottom: 0px;} #first_item{padding-top:0;margin-top:0}}</style><div class="section3_down col-xs-6 col-md-6 col-sm-6 col-lg-6" id="first_item"><div class="picto_section3_down" data-ordre="1" data-url="/news/detail/'+News[0].news+'/"><div style="background-image:url('+News[0].jacket+');" class="news1"></div></div><div class="text_section3_down" style="width: calc(100% - 154px);height: 100%;float: left;"><div class="text_section3_down_up">'+News[0].title+'</div><div class="text_section3_down_down">'+News[0].summary+'</div></div></div>');This.append('<div class="section3_down col-xs-6 col-md-6 col-sm-6 col-lg-6"><div class="picto_section3_down" data-ordre="2" data-url="/news/detail/'+News[1].news+'/"><div style="background-image:url('+News[1].jacket+');" class="news2"></div></div><div class="text_section3_down"><div class="text_section3_down_up">'+News[1].title+'</div><div class="text_section3_down_down">'+News[1].summary+'</div></div></div>');This.append('<div class="section3_down col-xs-6 col-md-6 col-sm-6 col-lg-6" style="margin-top: 20px;" id="item_news_3"><div class="picto_section3_down" data-ordre="3" data-url="/news/detail/'+News[2].news+'/"><div style="background-image:url('+News[2].jacket+');" class="news3"></div></div><div class="text_section3_down"><div class="text_section3_down_up">'+News[2].title+'</div><div class="text_section3_down_down">'+News[2].summary+'</div></div></div>');
        This.append(Links);
        function ActuFloats() {
         $('.picto_section3_down').each(function(){
           var text = $(this).parent().find('.text_section3_down_down').text();
           var long = parseInt(text.length);
           var i = 0;
           var n = 0;
           var longueur = 0;
           for(i;i<long;i++) {
             var hauteur = $(this).parent().find('.text_section3_down').height();
             hauteur = parseInt(hauteur);
             var height = parseInt($(this).height());
             var texts = $(this).parent().find('.text_section3_down_down').text();
             var longs = parseInt(texts.length);
             if(hauteur > 120) {
               n = n + 3;
               longueur = longs - n;
               str = text.slice(longueur, -1);
               text = text.replace(str,' ..');
               $(this).parent().find('.text_section3_down_down').html(text);
               i++
             }else{
               i = long + 1;
             }
           }
          if($(this).data('ordre') == '2') {
           $(this).css('float','right');
           $(this).parent().find('.text_section3_down_up').css('text-align','right');
           $(this).parent().find('.text_section3_down_up').css('margin-left','20%');
           $(this).parent().find('.text_section3_down_up').css('padding-left','2%');
           $(this).parent().find('.text_section3_down_up').css('padding-right','2%');
           $(this).parent().find('.text_section3_down_down').css('text-align','right');
           $(this).parent().find('.text_section3_down_down').css('margin-left','20%');
           $(this).parent().find('.text_section3_down_down').css('padding-left','2%');
           $(this).parent().find('.text_section3_down_down').css('padding-right','2%');

           if(parseInt($(document).width()) < 425) {
             $(this).parent().find('.text_section3_down_up').css('margin-left','0');
             $(this).parent().find('.text_section3_down_up').css('margin-right','5%');
           }
          }else{
           $(this).css('float','left');
          }
         });
        }
        function aligneTitresNews() {
          $('.text_section3_down_up').each(function(){
            var doc = $(document).width();
            var This = $(this);
            var Attr = This.attr('style');
            var Height = This.height();
            if(parseInt(doc) <= 425) {
              marginTop = ((120 - parseInt(Height))/2);
              This.css('margin-top',marginTop+'px');
            }else{
              This.attr('style',Attr);
            }
          })
        }
        $(window).resize(function(){
          aligneTitresNews();
          ActuFloats();
        })
        //intNews();
        ActuFloats();
        marginNewsTitle();
        aligneTitresNews();
      }
      $('.section3_down').click(function(){
        var url = $(this).find('.picto_section3_down').data('url');
        window.location.href = url;
      })
    }
  });
}

function alignerPicto() {
  var Largeur = $('#rond-2').width();
  $('.picto_section1_down').each(function(){
    var This = $(this);
    var parentHeight = $(this).parent().height();
    var pictoHeight = $(this).height();
    if(parseInt(Largeur) <= 425) {
      var margintop = (parseInt(parentHeight) - parseInt(pictoHeight)) /2 ;
      This.css('margin-top',margintop+'px');
    }else{
      This.attr('style','');
    }
  })
}
function AnglaisFrancais() {
  var doc = parseInt($(document).width());
  var langue = "${_('hide-picture-english')}";
  if(doc < 768) {
    if(langue == 'hide-picture-english') {
      $('.index-actualite').css('height','1050px');
    }
  }else{
      $('.index-actualite').attr('style','');
  }
}
function marginNewsTitle() {
  $('.text_section3_down_up').each(function(){
    var Height = $(this).height();
    if(Height <= 30) {
      $(this).css('margin-top','25px');
    }else{
      $(this).css('margin-top','0px');
    }
  })
}
/* call ajax recuperation nombre de cours */
/* resize decouvrez phileas */
function philDec(){
  var hauteur = parseInt($('.section1').height()) - 140;
  $('#bouton-decouverte').css('margin-top',hauteur+'px');
}
/* optimiser taille */
function policeOpti(){
  $('.text_section1_down_up').each(function(){
    var height = parseInt($(this).height());
    var font = $(this).css('font-size');
    font = font.replace('px','');
    font = parseInt(font);
    var i = 0;
    for(i; i<=font;i++) {
      if(height > 230) {
        font = font - 1;
        $('.text_section1_down_up').css('font-size',font+'px');
      }else{
        i = font;
      }
    }
  })
}
function hauteurcours() {
  var plug = 0;
  if($(window).width() < 486 ){
    var long = $('.courses-listing-item').length;
    var height = parseInt($('.courses-listing-item').height());
    console.log('longueur : '+long)
    if(long == undefined ) {
      console.log('test');
      $('.color-greys').hide();
    }else if(parseInt(long) == 1) {
      plug = 120;
    }else if(parseInt(long) == 2){
      plug = 230;
    }else{
      plug = 300;
    }
    var longs = (long * height)+plug;
    console.log('longueur '+long );
    $('.courses-container').css('height',longs+'px');
  }else{
    plug = 100;
    var height = parseInt($('.courses-listing-item').height());
    var longs = height+100;
    console.log('longueur '+long );
    $('.courses-container').css('height',longs+'px');
  }
}
$(document).ready(function(){
 marginNewsTitle();
 AnglaisFrancais();
 alignerPicto();
 callNews();
 policeOpti();
 hauteurcours();
})
$(window).resize(function(){
 marginNewsTitle();
 AnglaisFrancais();
 alignerPicto();
 policeOpti();
 hauteurcours();
})
