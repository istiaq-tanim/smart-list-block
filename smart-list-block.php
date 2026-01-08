<?php

/**
 * Plugin Name:       Smart List Block
 * Description:       Smart List is block to show list.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Kazi Istiaq Mahamud
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       smart-list-block
 *
 * @package CreateBlock
 */

function smart_list_register_block_category($categories, $post)
{
	return array_merge(
		$categories,
		[
			[
				'slug'  => 'smart-list',
				'title' => __('Smart List', 'smart-list-block'),
				'icon'  => null
			]
		]
	);
}
add_filter('block_categories_all', 'smart_list_register_block_category', 10, 2);


if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
function create_block_smart_list_block_block_init()
{
	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}

	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'create_block_smart_list_block_block_init');
