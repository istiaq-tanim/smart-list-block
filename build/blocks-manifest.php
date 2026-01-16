<?php
// This file is generated. Do not modify it manually.
return array(
	'smart-list-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/smart-list-block',
		'version' => '1.0.0',
		'title' => 'Smart List Block',
		'category' => 'smart-list',
		'icon' => array(
			'src' => 'list-view',
			'foreground' => '#641DD7'
		),
		'description' => 'Smart List is block to show list',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'presetsType' => array(
				'type' => 'string',
				'default' => 'list'
			),
			'listOrientation' => array(
				'type' => 'string',
				'default' => 'vertical'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'previewWidth' => array(
				'type' => 'string',
				'default' => '100%'
			),
			'spaceBetween' => array(
				'type' => 'number',
				'default' => 24
			),
			'iconGap' => array(
				'type' => 'number',
				'default' => 12
			),
			'divider' => array(
				'type' => 'object',
				'default' => array(
					'show' => false,
					'width' => 1,
					'style' => 'solid',
					'color' => '#f05e31'
				)
			),
			'border' => array(
				'type' => 'object',
				'default' => array(
					'show' => false,
					'width' => 1,
					'style' => 'solid',
					'color' => '#f05e31'
				)
			),
			'showConnectionLine' => array(
				'type' => 'boolean',
				'default' => false
			),
			'backgroundStyle' => array(
				'type' => 'object',
				'default' => array(
					'type' => 'solid',
					'background' => '',
					'image' => '',
					'backgroundSize' => 'auto',
					'backgroundOverlay' => array(
						'enabled' => false,
						'color' => '#f05e31',
						'opacity' => 50
					)
				)
			),
			'color' => array(
				'type' => 'string',
				'default' => '#000'
			),
			'padding' => array(
				'type' => 'object',
				'default' => array(
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'linked' => true
				)
			),
			'margin' => array(
				'type' => 'object',
				'default' => array(
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'linked' => true
				)
			),
			'radius' => array(
				'type' => 'object',
				'default' => array(
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'linked' => true
				)
			),
			'title' => array(
				'type' => 'boolean',
				'default' => true
			),
			'description' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'smart-list-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
