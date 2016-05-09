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
  $(document).ready(function() {
    updateSelect();
    updateSubmenu();
  });
})(jQuery);
