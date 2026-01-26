import { useBlockProps } from "@wordpress/block-editor";
import ListItemPreview from "../smart-list-block/components/ListItemPreview";

export default function Edit({ attributes, setAttributes, context }) {
      const { title, description, icon, iconStyle, iconBorderStyle, radiusIcon, paddingIcon, presetsType } = context;

      return (
            <div {...useBlockProps({ className: "smart-list-item" })}>
                  <ListItemPreview
                        icon={icon}
                        iconStyle={iconStyle}
                        title={title}
                        description={description}
                        presetsType={presetsType}
                        iconBorderStyle={iconBorderStyle}
                        paddingIcon={paddingIcon}
                        radiusIcon={radiusIcon}
                  ></ListItemPreview>
            </div>
      );
}
