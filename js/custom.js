(function ($) {
  'use strict';

  function updateSelect() {
    $('.page-search .pane-ting-search-sort-form .form-select').select2();
    $('.page-search .pane-search-per-page .form-select').select2();
    $('.pane-taxonomy-menu select').select2();
    $('.pane-library-list select').select2();
  }

  function updateSubmenu() {
    var secondaryMenu = $('.secondary-menu-wrapper');
    $('.topbar-menu').after(secondaryMenu);
  }

  function updateFooter() {
    var customFooter = '<div class="social-links"><a href="https://twitter.com/roskildebib" target="_blank" class="icon-t"></a>';
    customFooter +=  '<a href="https://www.facebook.com/roskildebib" target="_blank" class="icon-f"></a>';
    customFooter +=  '<a href="https://www.instagram.com/roskildebib/" target="_blank" class="icon-i"></a>';
    customFooter +=  '<a href="mailto:adm@roskilde.dk" class="icon-c"></a></div>';
    customFooter +=  '<div class="komunne"><a href="#"></a></div>';
    $('.footer .attachment-fourth').html(customFooter);
  }

  $(document).ready(function() {
    updateSelect();
    updateSubmenu();
    updateFooter();
  });
})(jQuery);
