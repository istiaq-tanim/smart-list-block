import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
      const { icon, title, description } = attributes;

      return (
            <div {...useBlockProps.save({ className: "smart-list-item" })}>
                  {icon && <span className="smart-list-icon">{icon}</span>}

                  <div className="smart-list-content">
                        {title && (
                              <RichText.Content
                                    tagName="p"
                                    className="smart-list-title"
                                    value={title}
                              />
                        )}

                        {description && (
                              <RichText.Content
                                    tagName="p"
                                    className="smart-list-description"
                                    value={description}
                              />
                        )}
                  </div>
            </div>
      );
}
