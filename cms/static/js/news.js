(function() {
    'use strict';

  define(['jquery', 'jquery.ui', 'common/js/components/views/feedback_prompt',
              'common/js/components/views/feedback_notification'],
  function($, ui, PromptView, NotificationView) {
    // Visibility toggle
    $("li.action-visible").live('click', function(event){
      var checkbox_element, page_element;
      checkbox_element = event.target;
      page_element = $(checkbox_element).closest('.news-page');
      var saving = new NotificationView.Mini({
          title: gettext('Saving')
      });
      saving.show();
      $.ajax({
          type: 'POST',
          url: "/news_handler/" + $(page_element).data('page-id') + "/",
          data: JSON.stringify({
              visible: !$(checkbox_element).is(':checked')
          }),
          contentType: 'application/json'
      }).success(function() {
          return saving.hide();
      });  // ajax

    });  // click

    // Delete action
    $("a.delete-button").live('click', function(event){
      var action_element, page_element;
      action_element = event.target;
      page_element = $(action_element).closest('.news-page');
      var confirm;
      confirm = new PromptView.Warning({
          title: gettext('Delete Page Confirmation'),
          message: gettext('Are you sure you want to delete this page? This action cannot be undone.'),
          actions: {
              primary: {
                  text: gettext('OK'),
                  click: function(view) {
                      var $component, deleting;
                      view.hide();
                      $component = $(event.currentTarget).parents('.component');
                      deleting = new NotificationView.Mini({
                          title: gettext('Deleting')
                      });
                      deleting.show();
                      return $.ajax({
                          type: 'DELETE',
                          url: "/news_handler/" + $(page_element).data('page-id') + "/",
                      }).success(function() {
                          $component.remove();
                          return deleting.hide();
                      });
                  }
              },
              secondary: [
                  {
                      text: gettext('Cancel'),
                      click: function(view) {
                          return view.hide();
                      }
                  }
              ]
          }
      });
      return confirm.show();
    });  // click

    // Add page
    $(".new-news").live('click', function(event){
      event.preventDefault();
      $.ajax({
          type: 'POST',
          url: "/news_handler/",
          contentType: 'application/json'
      }).success(function(data) {
          var pageID = data["page_id"];
          var $el = ' \
            <li class="course-nav-item news-page component" data-page-id="'+pageID+'"> \
              <div class="course-nav-item-header"> \
                <h3 class="title">Empty</h3> \
              </div> \
             \
              <div class="course-nav-item-actions wrapper-actions-list"> \
                <ul class="actions-list"> \
             \
                  <li class="action-item action-edit"> \
                    <a rel="modal" href="#edit-news-modal" class="edit-button action-button" title="This link will open in a modal window"> \
                     <span class="icon fa fa-pencil" aria-hidden="true"></span> \
                     <span class="action-button-text">Edit</span> \
                    </a> \
                  </li> \
                  <li class="action-item action-visible"> \
                    <label><span class="sr">Show this page</span></label> \
                      <input type="checkbox" class="toggle-checkbox" data-tooltip="Show/hide page" /> \
                      <div class="action-button"><span class="icon fa fa-eye" aria-hidden="true"></span><span class="icon fa fa-eye-slash"></span></div> \
                  </li> \
                  <li class="action-item action-delete"> \
                    <a href="javascript: void(0)" data-tooltip="Delete" class="delete-button action-button"> \
                      <span class="icon fa fa-trash-o" aria-hidden="true"></span> \
                      <span class="sr">Delete this component</span> \
                    </a> \
                  </li> \
                </ul> \
              </div> \
            </li> \
          ';
          $('.new-component-item').before($el);
          $("a[rel*=modal]").leanModal();
          var $newComp = $("ul").find("[data-page-id='" + pageID + "']");
          $newComp.addClass('course-tab');
          $newComp.addClass('new');
          setTimeout(function() {
              return $newComp.removeClass('new');
          }, 1000);
          $('html, body').animate({
              scrollTop: $('.new-component-item').offset().top
          }, 500);
      });  // ajax

    });  // click
    var CUSTOM_FONTS, STANDARD_FONTS, _getFonts;

    CUSTOM_FONTS = "Default='Open Sans', Verdana, Arial, Helvetica, sans-serif;";

    STANDARD_FONTS = "Andale Mono=andale mono,times;" + "Arial=arial,helvetica,sans-serif;" + "Arial Black=arial black,avant garde;" + "Book Antiqua=book antiqua,palatino;" + "Comic Sans MS=comic sans ms,sans-serif;" + "Courier New=courier new,courier;" + "Georgia=georgia,palatino;" + "Helvetica=helvetica;" + "Impact=impact,chicago;" + "Symbol=symbol;" + "Tahoma=tahoma,arial,helvetica,sans-serif;" + "Terminal=terminal,monaco;" + "Times New Roman=times new roman,times;" + "Trebuchet MS=trebuchet ms,geneva;" + "Verdana=verdana,geneva;" + "Webdings=webdings;" + "Wingdings=wingdings,zapf dingbats";

    _getFonts = function() {
      return CUSTOM_FONTS + STANDARD_FONTS;
    };
    // Edit action
    tinymce.init({
        selector: 'textarea',
          visual: false,
          plugins: "textcolor, link, image",
          image_advtab: true,
          toolbar: "formatselect | fontselect | bold italic underline forecolor wrapAsCode | bullist numlist outdent indent blockquote | link unlink image | code",
          block_formats: interpolate("%(paragraph)s=p;%(preformatted)s=pre;%(heading3)s=h3;%(heading4)s=h4;%(heading5)s=h5;%(heading6)s=h6", {
            paragraph: gettext("Paragraph"),
            preformatted: gettext("Preformatted"),
            heading3: gettext("Heading 3"),
            heading4: gettext("Heading 4"),
            heading5: gettext("Heading 5"),
            heading6: gettext("Heading 6")
          }, true),
          width: '100%',
          height: '347px',
          menubar: false,
          statusbar: false,
          browser_spellcheck: true,
    });

    $("a.action-cancel").live('click', function(event){
      $("#edit-news-modal, #lean_overlay").css({'display': 'none'});
    });  // click

    $("a.action-save").live('click', function(event){
      var pageID = $(".modal-editor").data('page-id');
      var saving = new NotificationView.Mini({
          title: gettext('Saving')
      });
      saving.show();
      var newsTitle = '';
      newsTitle = $("input#title").val();
      if(!newsTitle.length){
        newsTitle = 'Empty';
      }
      $.ajax({
          type: 'POST',
          url: "/news_handler/" + pageID + "/",
          data: JSON.stringify({
              title: newsTitle,
              content: tinyMCE.activeEditor.getContent()
          }),
          contentType: 'application/json'
      }).success(function() {
          $("#edit-news-modal, #lean_overlay").css({'display': 'none'});
          $("li.news-page[data-page-id="+pageID+"]"
          ).children('.course-nav-item-header').children("h3.title").text(newsTitle);
          return saving.hide();
      });  // ajax

    });  // click

    $("a.edit-button").live('click', function(event){
      var checkbox_element, page_element;
      checkbox_element = event.target;
      page_element = $(checkbox_element).closest('.news-page');
      var pageTitle = $(page_element).children('.course-nav-item-header').children('h3.title').text();
      $(".modal-editor").css({'top': '90px', 'position': 'absolute'});
      var pageID = $(page_element).data('page-id');
      var contentURL = '/get_news_content/'+ pageID + "/"
      $.getJSON( contentURL, function( data ) {
        tinyMCE.activeEditor.setContent(data.content);
      });
      $(".modal-editor").data('page-id', pageID);
      $("input#title").val(pageTitle);
    });  // click

  });  // function

})();