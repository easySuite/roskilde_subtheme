<?php
/**
 * @file
 * Ding news node blocks template.
 */
$lead = field_get_items('node', $item, 'field_' . $item->type . '_lead');
$teaser = field_get_items('node', $item, 'field_' . $item->type . '_body');
$image_field = 'field_' . $item->type . '_title_image';
$image = _ding_nodelist_get_dams_image_info($item, $image_field);
?>
<div class="nb-item <?php print $item->type; ?>">
  <div class="nb-inner">
    <div class="nb-news-image"><?php print $image ? theme('image_style', array_merge($image, array('style_name' => 'ding_nodelist_medium'))) : ''; ?></div>
    <div class="nb-news-body">
      <h3><?php print l($item->title, 'node/' . $item->nid); ?></h3>
      <div class="nb-event-summary">
      <?php
      if (isset($lead[0]['safe_value'])) {
        print strip_tags($lead[0]['safe_value']);
      }
      elseif (isset($teaser[0]['safe_value'])) {
        print strip_tags($teaser[0]['safe_value']);
      }
      else {
        print '';
      }
      ?>
    </div>
    </div>
  </div>
</div>
