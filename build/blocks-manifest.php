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
			'html' => false,
			'anchor' => true,
			'className' => true,
			'innerBlocks' => true
		),
		'allowedBlocks' => array(
			'create-block/smart-list-item'
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
				'type' => 'object',
				'default' => array(
					'desktop' => 4,
					'tablet' => 4,
					'mobile' => 4
				)
			),
			'iconGap' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 12,
					'tablet' => 12,
					'mobile' => 12
				)
			),
			'divider' => array(
				'type' => 'object',
				'default' => array(
					'show' => false,
					'width' => array(
						'desktop' => 1,
						'tablet' => 1,
						'mobile' => 1
					),
					'style' => 'solid',
					'color' => '#f05e31'
				)
			),
			'border' => array(
				'type' => 'object',
				'default' => array(
					'show' => false,
					'width' => array(
						'desktop' => 1,
						'tablet' => 1,
						'mobile' => 1
					),
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
					'backgroundSize' => 'auto'
				)
			),
			'backgroundOverlay' => array(
				'type' => 'object',
				'default' => array(
					'enabled' => false,
					'color' => '#f05e31',
					'opacity' => array(
						'desktop' => 50,
						'tablet' => 30,
						'mobile' => 30
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
					'desktop' => array(
						'top' => 12,
						'right' => 12,
						'bottom' => 12,
						'left' => 12,
						'linked' => true
					),
					'tablet' => array(
						'top' => 8,
						'right' => 8,
						'bottom' => 8,
						'left' => 8,
						'linked' => true
					),
					'mobile' => array(
						'top' => 4,
						'right' => 4,
						'bottom' => 4,
						'left' => 4,
						'linked' => true
					)
				)
			),
			'margin' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					)
				)
			),
			'radius' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					)
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
					'height' => 1.5,
					'spacing' => 0,
					'text' => 'List item title',
					'titleColor' => '#757575',
					'titleHoverColor' => '#757575'
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
					'height' => 1.5,
					'spacing' => 0,
					'text' => 'List item title',
					'descriptionColor' => '#757575',
					'descriptionHoverColor' => '#757575'
				)
			),
			'contentEffect' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'iconEffect' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'gapTitleToDescription' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 6,
					'tablet' => 3,
					'mobile' => 1
				)
			),
			'icon' => array(
				'type' => 'object',
				'default' => array(
					'show' => true,
					'type' => 'iconSet',
					'imageSource' => '',
					'iconSourceId' => 'star',
					'width' => array(
						'desktop' => 24,
						'tablet' => 20,
						'mobile' => 16
					),
					'height' => array(
						'desktop' => 24,
						'tablet' => 20,
						'mobile' => 16
					),
					'size' => array(
						'desktop' => 24,
						'tablet' => 20,
						'mobile' => 16
					),
					'position' => 'left',
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
					'width' => array(
						'desktop' => 1,
						'tablet' => 1,
						'mobile' => 1
					),
					'style' => 'solid',
					'color' => '#f05e31'
				)
			),
			'paddingIcon' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 4,
						'right' => 4,
						'bottom' => 4,
						'left' => 4,
						'linked' => true
					),
					'tablet' => array(
						'top' => 4,
						'right' => 4,
						'bottom' => 4,
						'left' => 4,
						'linked' => true
					),
					'mobile' => array(
						'top' => 4,
						'right' => 4,
						'bottom' => 4,
						'left' => 4,
						'linked' => true
					)
				)
			),
			'radiusIcon' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					),
					'tablet' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					),
					'mobile' => array(
						'top' => 0,
						'right' => 0,
						'bottom' => 0,
						'left' => 0,
						'linked' => true
					)
				)
			)
		),
		'providesContext' => array(
			'title' => 'title',
			'description' => 'description',
			'icon' => 'icon',
			'iconStyle' => 'iconStyle',
			'iconBorderStyle' => 'iconBorderStyle',
			'radiusIcon' => 'radiusIcon',
			'paddingIcon' => 'paddingIcon',
			'presetsType' => 'presetsType'
		),
		'textdomain' => 'smart-list-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'smart-list-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/smart-list-item',
		'title' => 'Smart List Item',
		'parent' => array(
			'create-block/smart-list-block'
		),
		'category' => 'smart-list',
		'icon' => 'editor-ul',
		'supports' => array(
			'reusable' => false,
			'html' => false
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'Star'
			),
			'titleText' => array(
				'type' => 'string',
				'default' => 'Bangladesh'
			),
			'descriptionText' => array(
				'type' => 'string',
				'default' => 'I Love My Country'
			)
		),
		'usesContext' => array(
			'title',
			'description',
			'icon',
			'iconStyle',
			'iconBorderStyle',
			'radiusIcon',
			'paddingIcon',
			'presetsType'
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style.css',
		'render' => 'file:./render.php'
	)
);
