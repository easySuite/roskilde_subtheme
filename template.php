<?php

/**
 * @file
 * Preprocess and Process Functions.
 */

/**
 * Implements hook_theme_registry_alter().
 */
function roskilde_subtheme_theme_registry_alter(&$theme_registry) {
  if (isset($theme_registry['ding_nodelist.ding_news.node_blocks'])) {
    $path = drupal_get_path('theme', 'roskilde_subtheme');
    $theme_registry['ding_nodelist.ding_news.node_blocks']['theme path'] = $path;
    $theme_registry['ding_nodelist.ding_news.node_blocks']['path'] = $path . '/templates';
  }

  if (isset($theme_registry['ding_nodelist.ding_event.node_blocks'])) {
    $path = drupal_get_path('theme', 'roskilde_subtheme');
    $theme_registry['ding_nodelist.ding_event.node_blocks']['theme path'] = $path;
    $theme_registry['ding_nodelist.ding_event.node_blocks']['path'] = $path . '/templates';
  }
}
