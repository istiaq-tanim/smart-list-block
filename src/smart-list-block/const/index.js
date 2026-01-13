import PresetIcon from "../assets/PresetIcon";
import StylesIcon from "../assets/StylesIcon";
import ListIcon from "../assets/NormalListIcon";
import DescriptionListIcon from "../assets/DescriptionListIcon";
import RightAlign from "../assets/RightAlign";
import MiddleAlign from "../assets/MiddleAlign";
import LeftAlign from "../assets/LeftAlign";
import Solid from "../assets/Solid";
import Gradient from "../assets/Gradient";
import Image from "../assets/Image";

export const generalTabItems = [
	{
		name: "presets",
		title: "Presets",
		icon: <PresetIcon></PresetIcon>,
	},
	{
		name: "styles",
		title: "Styles",
		icon: <StylesIcon></StylesIcon>,
	},
];
export const presetTabItems = [
	{
		name: "list",
		title: "List",
		icon: <ListIcon></ListIcon>,
	},
	{
		name: "descriptionList",
		title: "Description List",
		icon: <DescriptionListIcon></DescriptionListIcon>,
	},
];
export const orientationTabItems = [
	{
		name: "horizontal",
		title: "Horizontal",
		icon: <ListIcon></ListIcon>,
	},
	{
		name: "vertical",
		title: "Vertical",
		icon: <DescriptionListIcon></DescriptionListIcon>,
	},
];
export const alignmentTabItems = [
	{
		name: "left",
		title: "Left",
		icon: <LeftAlign></LeftAlign>,
	},
	{
		name: "center",
		title: "Center",
		icon: <MiddleAlign></MiddleAlign>,
	},
	{
		name: "right",
		title: "Right",
		icon: <RightAlign></RightAlign>,
	},
];

export const listItems = [
	{
		icon: "🎯",
		title: "List Item 1",
		description: "This is the firsts item description",
	},
	{
		icon: "✨",
		title: "List Item 2",
		description: "This is the second item description",
	},
	{
		icon: "🚀",
		title: "List Item 3",
		description: "This is the thirds item description",
	},
];

export const dividerStyle = [
	{
		label: "Solid",
		value: "solid",
	},
	{
		label: "Dotted",
		value: "dotted",
	},
	{
		label: "Dashed",
		value: "dashed",
	},
	{
		label: "Double",
		value: "double",
	},
];

export const backGroundStyles = [
	{
		name: "solid",
		title: "solid",
		icon: <Solid></Solid>,
	},
	{
		name: "gradient",
		title: "gradient",
		icon: <Gradient></Gradient>,
	},
	{
		name: "image",
		title: "image",
		icon: <Image></Image>,
	},
];
