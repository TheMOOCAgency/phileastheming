(function() {
    'use strict';
 define(["js/views/validation",
        "jquery",
        "underscore",
        "gettext",
        "js/views/modals/validation_error_modal",
        'edx-ui-toolkit/js/utils/html-utils'],
    function(ValidatingView, $, _, gettext, ValidationErrorModal, HtmlUtils)  {
        var title = gettext("Your policy changes have been saved.");
        var message = gettext("No validation is performed on policy keys or value pairs. If you are having difficulties, check your formatting.");
        var validationView = new ValidatingView();
        
         $(document).ready(function() {
             $('input[type="checkbox"]').on('change', function() {
                 $('input[name="' + this.name + '"]').not(this).prop('checked', false);
             });
             $('#btn_submit').click(function() {
                 var formData = $('#settings_customize').serializeArray();
                 var custom_settings = {};
                 for (var i = 0; i < formData.length; i++) {
                     custom_settings[formData[i]['name']] = formData[i]['value']
                 }
                 var course_id = window.location.href.split('customize/')[1].split('/')[0];
                 $.ajax({
                     type: 'POST',
                     url: "/update_course/"+course_id,
                     // contentType: 'application/json',
                     data: custom_settings,
                     dataType: 'json',
                     // contentType: 'application/json'
                 }).success(function() {
                     validationView.showSavedBar(title, message);
                 }); // ajax
             });
         });

  });  // function

})();