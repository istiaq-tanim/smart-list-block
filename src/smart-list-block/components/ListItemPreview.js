import { RichText } from "@wordpress/block-editor";
import RenderIcon from "./RenderIcon";
function ListItemPreview({
      icon,
      iconStyle,
      title,
      description,
      presetsType,
      iconBorderStyle,
      paddingIcon,
      radiusIcon
}) {

      const TitleTag = title?.tags === "p" ? "p" : title?.tags || "p";
      const DescriptionTag = description?.tags === "p" ? "p" : description?.tags || "p";

      return (
            <li className={`smart-item icon-${icon.position} icon-align-${icon.alignment || "center"}`}>
                  {/* Render Icon */}
                  <RenderIcon
                        icon={icon}
                        iconStyle={iconStyle}
                        iconBorderStyle={iconBorderStyle}
                        radiusIcon={radiusIcon}
                        paddingIcon={paddingIcon}
                  />

                  {/* List content */}
                  <div className="list-content">
                        {/* Editable Title */}
                        {title.show && (
                              <RichText
                                    tagName={TitleTag}
                                    className={TitleTag === "p" ? "title" : "title-without-size"}
                                    value={title.text}
                                    onChange={(value) => setAttributes({ title: { ...title, text: value } })}
                                    placeholder="Title..."
                              />
                        )}

                        {/* Editable Description */}
                        {(presetsType !== "list" || description.show) && (
                              <RichText
                                    tagName={DescriptionTag}
                                    className={DescriptionTag === "p" ? "description" : "description-without-size"}
                                    value={description.text}
                                    onChange={(value) => setAttributes({ description: { ...description, text: value } })}
                                    placeholder="Description..."
                              />
                        )}
                  </div>
            </li>
      );
}

export default ListItemPreview;
