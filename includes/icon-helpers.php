<?php

if (!defined('ABSPATH')) {
  exit;
}

if (!function_exists('smart_list_get_icon_component')) {
  function smart_list_get_icon_component($icon_source_id)

  {
    // Map icon IDs to SVG strings - exact match to your customIcons
    $icons = [
      'Circle' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M18.0996 11.7998C18.0995 8.32043 15.2792 5.5 11.7998 5.5C8.3205 5.50011 5.50011 8.3205 5.5 11.7998C5.5 15.2792 8.32043 18.0995 11.7998 18.0996V19.5996L11.3984 19.5898C7.41004 19.3876 4.21181 16.1896 4.00977 12.2012L4 11.7998C4.00011 7.49207 7.49207 4.00011 11.7998 4L12.2012 4.00977C16.3226 4.21855 19.5995 7.62655 19.5996 11.7998L19.5898 12.2012C19.381 16.3226 15.9731 19.5996 11.7998 19.5996V18.0996C15.2793 18.0996 18.0996 15.2793 18.0996 11.7998Z" fill="currentColor"/></svg>',

      'star' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M13.4887 3.07487L14.8799 7.35743C15.089 8.00243 15.6909 8.43931 16.3687 8.43931H20.8716C22.3875 8.43931 23.0184 10.3799 21.7922 11.2706L18.149 13.9171C17.6005 14.3155 17.3709 15.0224 17.5809 15.6674L18.9721 19.9499C19.4409 21.3918 17.7899 22.5909 16.5637 21.7003L12.9205 19.0538C12.3721 18.6553 11.6286 18.6553 11.0802 19.0538L7.43699 21.7003C6.21074 22.5918 4.55987 21.3928 5.02859 19.9499L6.41985 15.6674C6.62891 15.0224 6.40016 14.3155 5.85172 13.9171L2.20756 11.2706C0.981304 10.379 1.6113 8.43931 3.12818 8.43931H7.63106C8.30886 8.43931 8.9098 8.00243 9.1198 7.35743L10.5111 3.07487C10.9798 1.633 13.02 1.633 13.4887 3.07487Z" fill="currentColor"/></svg>',

      'heart' => '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',

      'circleFill' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M15.6 7.8C15.6 12.1079 12.1079 15.6 7.8 15.6C3.49211 15.6 0 12.1079 0 7.8C0 3.49211 3.49211 0 7.8 0C12.1079 0 15.6 3.49211 15.6 7.8Z" fill="currentColor"/></svg>',

      'square' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M15.6 1.2V14.4C15.6 15.0628 15.0628 15.6 14.4 15.6H1.2C0.537192 15.6 0 15.0628 0 14.4V1.2C0 0.537192 0.537192 0 1.2 0H14.4C15.0628 0 15.6 0.537192 15.6 1.2Z" fill="currentColor"/></svg>',

      'triangle' => '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 22 20 2 20 12 2"/></svg>',

      'check' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 14" fill="none"><path d="M17.25 1.25L6.25 12.25L1.25 7.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',

      'x' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',

      'arrow' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M13.6162 5.36621C14.0737 4.90873 14.7971 4.88023 15.2881 5.28027L15.3838 5.36621L21.6338 11.6162C21.6751 11.6575 21.7118 11.7018 21.7461 11.7471C21.7596 11.7649 21.7736 11.7823 21.7861 11.8008L21.7939 11.8125C21.7989 11.8201 21.8028 11.8283 21.8076 11.8359C21.8439 11.8936 21.8757 11.9541 21.9023 12.0176C21.9114 12.0391 21.919 12.0611 21.9268 12.083C21.9332 12.1011 21.9397 12.1192 21.9453 12.1377C21.949 12.15 21.9518 12.1625 21.9551 12.1748C21.9628 12.2035 21.9709 12.2322 21.9766 12.2617C21.9998 12.3818 22.0054 12.5046 21.9932 12.626C21.9864 12.694 21.9724 12.7599 21.9551 12.8242C21.9518 12.8366 21.949 12.8491 21.9453 12.8613C21.9397 12.8798 21.9332 12.8979 21.9268 12.916C21.919 12.938 21.9113 12.9599 21.9023 12.9814C21.8758 13.045 21.8439 13.1054 21.8076 13.1631C21.8016 13.1727 21.7964 13.1829 21.79 13.1924C21.7763 13.213 21.761 13.2323 21.7461 13.252C21.7117 13.2974 21.6753 13.3423 21.6338 13.3838L15.3838 19.6338C14.8957 20.1219 14.1044 20.1219 13.6162 19.6338C13.1281 19.1456 13.1281 18.3544 13.6162 17.8662L17.7324 13.75H3.25C2.55966 13.75 2.00003 13.1903 2 12.5C2 11.8096 2.55964 11.25 3.25 11.25H17.7324L13.6162 7.13379L13.5303 7.03809C13.1302 6.54713 13.1587 5.82371 13.6162 5.36621Z" fill="currentColor"/></svg>',

      'npArrow' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20L17.3688 10L0 0V20Z" fill="currentColor"/></svg>',

      'bell' => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',

      'direction' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M10.0798 5.52002C8.55448 5.52002 7.51012 6.41628 6.71236 7.21502C6.23517 7.68657 5.81798 8.17034 5.27985 8.49753V7.92004C5.27985 7.66879 5.0511 7.44004 4.79985 7.44004H1.15473C0.918479 7.46254 0.718794 7.68285 0.71973 7.92004V16.56C0.71973 16.8113 0.948479 17.04 1.19973 17.04H4.79973C4.96473 17.04 5.12692 16.9491 5.21224 16.8075C6.27443 17.9822 7.71352 18.4801 9.11968 18.4801H12.9597C13.8822 18.4801 14.6397 17.7226 14.6397 16.8001C14.6397 16.5366 14.5619 16.2947 14.4522 16.0726C15.3494 16.0435 16.0797 15.3038 16.0797 14.4001C16.0797 14.1366 16.0019 13.8947 15.8922 13.6726C16.2672 13.6669 16.6656 13.6004 16.9947 13.3276C17.5197 12.9572 17.5197 11.7572 17.0697 11.2801H21.1197C22.3169 11.2707 23.2619 10.4588 23.2797 9.36008C23.2197 8.0954 22.1997 7.4504 21.1197 7.44008H15.7946C15.7421 6.94882 15.5658 6.47634 15.2021 6.13508C14.7774 5.73663 14.1624 5.52008 13.4395 5.52008L10.0798 5.52002ZM10.0798 6.48002H13.4398C13.9742 6.48002 14.3211 6.62533 14.5423 6.83253C14.7083 6.98816 14.7917 7.20192 14.8348 7.44002C14.3998 7.43721 14.1626 7.64252 14.1533 7.92002C14.1533 8.17408 14.3867 8.40376 14.6398 8.40002H21.1198C21.7967 8.41033 22.3133 8.77315 22.3198 9.36002C22.2898 10.0744 21.6758 10.3144 21.1198 10.32C19.1998 10.3172 17.0398 10.3172 15.3898 10.3425C15.2989 10.366 15.0842 10.4344 15.0073 10.695C14.9304 10.9557 15.0626 11.116 15.1198 11.1825C15.5998 11.5172 15.8858 11.4844 16.3198 11.7572C16.6686 12.2494 16.2317 12.7172 15.8398 12.72H14.3998C14.1504 12.7238 13.9264 12.9506 13.9264 13.2C13.9264 13.4494 14.1504 13.6763 14.3998 13.68C14.8067 13.68 15.1198 13.9931 15.1198 14.4C15.1198 14.8069 14.8067 15.12 14.3998 15.12H12.9598C12.7104 15.1238 12.4864 15.3506 12.4864 15.6C12.4864 15.8494 12.7104 16.0763 12.9598 16.08C13.3667 16.08 13.6798 16.3931 13.6798 16.8C13.6798 17.2069 13.3667 17.52 12.9598 17.52H9.11981C7.59169 17.52 6.16565 16.9135 5.27981 15.2175V9.4875C6.18449 9.22969 6.8042 8.49001 7.39481 7.8975C8.37733 7.12969 8.87968 6.47719 10.0798 6.48002ZM1.6798 8.40002H4.3198V16.08H1.6798V8.40002Z" fill="currentColor"/></svg>',

      'rightArrow' => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 15" fill="none"><path d="M1.25 13.25L7.25 7.25L1.25 1.25" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ];

    // Return the icon or default to 'star' if not found
    return $icons[$icon_source_id] ?? $icons['star'];
  }
}


if (!function_exists("smart_list_render_icon")) {
  function smart_list_render_icon($icon, $icon_style = [], $icon_border_style = [], $padding_icon = [], $radius_icon = [])
  {

    if (empty($icon) || !isset($icon['show']) || $icon['show'] !== true) {
      return '';
    }

    $has_bg = isset($icon_style["show"]) && $icon_style["show"] === true;
    $has_border = isset($icon_border_style["show"]) && $icon_border_style["show"] === true;

    $icon_type = $icon["type"] ?? "iconSet";
    $icon_source_id = $icon['iconSourceId'] ?? '';
    $image_source = $icon['imageSource'] ?? '';

    $icon_width_desktop = $icon['width']['desktop'] ?? 24;
    $icon_width_tablet = $icon['width']['tablet'] ?? 20;
    $icon_width_mobile = $icon['width']['mobile'] ?? 16;

    $icon_height_desktop = $icon['height']['desktop'] ?? 24;
    $icon_height_tablet = $icon['height']['tablet'] ?? 20;
    $icon_height_mobile = $icon['height']['mobile'] ?? 16;

    $icon_size_desktop = $icon['size']['desktop'] ?? 24;
    $icon_size_tablet = $icon['size']['tablet'] ?? 20;
    $icon_size_mobile = $icon['size']['mobile'] ?? 16;

    $border_width_desktop = $icon_border_style['width']['desktop'] ?? 1;
    $border_width_tablet = $icon_border_style['width']['tablet'] ?? 1;
    $border_width_mobile = $icon_border_style['width']['mobile'] ?? 1;

    $classes = ['render-icon'];

    if ($has_bg && isset($icon_style["type"])) {
      $classes[] = 'bg-' . esc_attr($icon_style["type"]);
    }

    if ($has_border) {
      $classes[] = "has-border";
    }

    $css_vars = [];


    $css_vars["--iconSize-desktop"] = esc_attr($icon_size_desktop) . 'px';
    $css_vars['--iconWidth-desktop'] = esc_attr($icon_width_desktop) . 'px';
    $css_vars['--iconHeight-desktop'] = esc_attr($icon_height_desktop) . 'px';
    $css_vars['--iconBorderWidth-desktop'] = esc_attr($border_width_desktop) . 'px';

    $css_vars['--iconSize-tablet'] = esc_attr($icon_size_tablet) . 'px';
    $css_vars['--iconWidth-tablet'] = esc_attr($icon_width_tablet) . 'px';
    $css_vars['--iconHeight-tablet'] = esc_attr($icon_height_tablet) . 'px';
    $css_vars['--iconBorderWidth-tablet'] = esc_attr($border_width_tablet) . 'px';

    $css_vars['--iconSize-mobile'] = esc_attr($icon_size_mobile) . 'px';
    $css_vars['--iconWidth-mobile'] = esc_attr($icon_width_mobile) . 'px';
    $css_vars['--iconHeight-mobile'] = esc_attr($icon_height_mobile) . 'px';
    $css_vars['--iconBorderWidth-mobile'] = esc_attr($border_width_mobile) . 'px';

    $css_vars['--icon-color'] = esc_attr($icon_style['iconColor'] ?? '#757575');
    $css_vars['--icon-hover-color'] = esc_attr($icon_style['iconHoverColor'] ?? '#757575');
    $css_vars['--bg-color'] = $has_bg ? esc_attr($icon_style['iconBgColor'] ?? 'transparent') : 'transparent';
    $css_vars['--bg-hover-color'] = $has_bg ? esc_attr($icon_style['iconHoverBgColor'] ?? 'transparent') : 'transparent';
    $css_vars['--iconBorderColor'] = $has_border ? esc_attr($icon_border_style['color'] ?? 'transparent') : 'transparent';
    $css_vars['--iconBorderStyle'] = esc_attr($icon_border_style['style'] ?? 'solid');


    foreach (['top', 'right', 'bottom', 'left'] as $side) {
      foreach (['desktop', 'tablet', 'mobile'] as $device) {
        $css_vars["--iconPadding{$side}-{$device}"] =
          esc_attr($padding_icon[$device][$side]
            ?? $padding_icon[$side]['desktop']
            ?? 10) . 'px';

        $css_vars["--iconRadius{$side}-{$device}"] =
          esc_attr($radius_icon[$device][$side]
            ?? $radius_icon[$side]['desktop']
            ?? 0) . 'px';
      }
    }


    $style_parts = [];
    foreach ($css_vars as $property => $value) {
      $style_parts[] = $property . ': ' . $value;
    }
    $style_attr = implode('; ', $style_parts);

    $output = '<div class="' . esc_attr(implode(' ', $classes)) . '" style="' . $style_attr . '">';

    if ($icon_type === 'custom' && !empty($image_source)) {
      // Inline style using your CSS vars
      $img_style = '
        width: var(--iconWidth-desktop);
        height: var(--iconHeight-desktop);
        object-fit: contain;
    ';

      $output .= '<img src="' . esc_url($image_source) . '" alt="icon" class="icon-image" style="' . esc_attr($img_style) . '" />';
    }

    // Icon from icon set (SVG)
    if ($icon_type === 'iconSet' && !empty($icon_source_id)) {
      $svg = smart_list_get_icon_component($icon_source_id);
      $output .= $svg;
    }

    $output .= '</div>';

    return $output;
  }
}
