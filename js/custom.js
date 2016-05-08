(function ($) {
  'use strict';

  function updateSelect() {
    $('.page-search .pane-ting-search-sort-form .form-select').select2();
    $('.page-search .pane-search-per-page .form-select').select2();
    $('.pane-taxonomy-menu select').select2();
    $('.pane-library-list select').select2();
  }

  $(document).ready(function() {
    updateSelect();
  });
})(jQuery);
