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
			'lists' => array(
				'type' => 'array',
				'default' => array(
					array(
						'icon' => '✨',
						'title' => 'Bangladesh',
						'description' => 'Beautiful Bangladesh'
					),
					array(
						'icon' => '✨',
						'title' => 'Bangladesh',
						'description' => 'Beautiful Bangladesh'
					),
					array(
						'icon' => '✨',
						'title' => 'Bangladesh',
						'description' => 'Beautiful Bangladesh'
					)
				)
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
				'default' => '#fff'
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
				'type' => 'object',
				'default' => array(
					'show' => true,
					'tags' => 'p',
					'family' => 'Roboto',
					'fontSize' => 16,
					'weight' => 400,
					'height' => 0,
					'spacing' => 0,
					'color' => '#2F2F2F'
				)
			),
			'description' => array(
				'type' => 'object',
				'default' => array(
					'show' => false,
					'tags' => 'p',
					'family' => 'Roboto',
					'fontSize' => 11,
					'weight' => 400,
					'height' => 0,
					'spacing' => 0,
					'color' => '#757575'
				)
			),
			'contentEffect' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'gapTitleToDescription' => array(
				'type' => 'number',
				'default' => 6
			),
			'icon' => array(
				'type' => 'object',
				'default' => array(
					'show' => true,
					'type' => 'iconSet',
					'imageSource' => '',
					'iconSourceId' => 'star',
					'width' => 20,
					'height' => 20,
					'size' => 24,
					'position' => 'before',
					'alignment' => 'center'
				)
			),
			'iconStyle' => array(
				'type' => 'object',
				'default' => array(
					'show' => false,
					'type' => 'square',
					'iconBackGroundStyle' => 'solid',
					'iconBgColor' => '#EEEEEE',
					'iconHoverBgColor' => '#EEEEEE',
					'iconColor' => '#757575',
					'iconHoverColor' => '#757575',
					'effect' => 'normal'
				)
			),
			'iconBorderStyle' => array(
				'type' => 'object',
				'default' => array(
					'show' => false,
					'width' => 1,
					'style' => 'solid',
					'color' => '#f05e31'
				)
			),
			'paddingIcon' => array(
				'type' => 'object',
				'default' => array(
					'top' => 10,
					'right' => 10,
					'bottom' => 10,
					'left' => 10,
					'linked' => true
				)
			),
			'radiusIcon' => array(
				'type' => 'object',
				'default' => array(
					'top' => 0,
					'right' => 0,
					'bottom' => 0,
					'left' => 0,
					'linked' => true
				)
			)
		),
		'providesContext' => array(
			'listOrientation' => 'listOrientation',
			'alignment' => 'alignment',
			'presetsType' => 'presetsType',
			'spaceBetween' => 'spaceBetween',
			'iconGap' => 'iconGap',
			'divider' => 'divider',
			'backgroundStyle' => 'backgroundStyle',
			'color' => 'color',
			'border' => 'border',
			'padding' => 'padding',
			'margin' => 'margin',
			'radius' => 'radius',
			'title' => 'title',
			'description' => 'description',
			'contentEffect' => 'contentEffect',
			'gapTitleToDescription' => 'gapTitleToDescription',
			'icon' => 'icon'
		),
		'textdomain' => 'smart-list-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
