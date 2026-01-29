<?php

$title_text = $attributes["titleText"] ?? "";
$description_text = $attributes["descriptionText"] ?? "";

$icon = $block->context["icon"] ?? [];
$icon_style = $block->context["iconStyle"] ?? [];
$icon_border_style = $block->context["iconBorderStyle"] ?? [];
$radius_icon = $block->context["radiusIcon"];
$padding_icon = $block->context["paddingIcon"];
$presets_type = $block->context["presetsType"];
$title = $block->context['title'] ?? [];
$description = $block->context['description'] ?? [];


$title_tag = isset($title["tags"]) && $title["tags"] !== "p" ? esc_attr($title["tags"]) : "p";
$description_tag = isset($description["tags"]) && $description["tags"] !== "p" ?
  esc_attr($description["tags"]) : "p";

$title_class = $title_tag === "p" ? "title" : 'title-without-size';
$description_class = $description_tag === "p" ? "description" : "description-without-size";

$show_description = $presets_type !== "list" || isset($description["show"]) && $description["show"] === true;

$icon_position = $icon["position"] ?? "left";
$icon_alignment = $icon["alignment"] ?? 'center';
$wrapper_class = 'smart-item ' . 'icon-' . esc_attr($icon_position) .
  ' icon-align-' . esc_attr($icon_alignment);

$wrapper_attributes = get_block_wrapper_attributes([
  "class" => $wrapper_class
]);

?>

<li <?php echo $wrapper_attributes; ?>>
  <?php
  echo smart_list_render_icon($icon, $icon_style, $icon_border_style, $padding_icon, $radius_icon)
  ?>
  <div class='list-content'>
    <?php if (isset($title["show"]) && $title["show"]): ?>
      <<?php echo $title_tag; ?> class="<?php echo esc_attr($title_class); ?>">
        <?php echo wp_kses_post($title_text) ?>
        </ <?php echo $title_tag; ?>>
      <?php endif; ?>


      <?php if ($show_description): ?>
        <<?php echo $description_tag; ?> class="<?php echo esc_attr($description_class); ?>">
          <?php echo wp_kses_post($description_text) ?>
          </ <?php echo $description_tag; ?>>
        <?php endif; ?>

  </div>
</li>