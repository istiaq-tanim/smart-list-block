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
import TopAlignment from "../assets/TopAlignment";
import MiddleAlignMent from "../assets/MiddleAlignMent";
import BottomAlignment from "../assets/BottomAlignment";
import Circle from "../assets/Circle";
import Square from "../assets/Square";
import Diamond from "../assets/Diamond";
import CircleCurve from "../assets/CircleCurve";
import Triangle from "../assets/Triangle";
import CircleSolid from "../assets/CircleSolid";

export const generalTabItems = [
	{
		name: "presets",
		title: "Presets",
		icon: <PresetIcon></PresetIcon>,
	},
	{
		name: "styles",
		title: "Style",
		icon: <StylesIcon></StylesIcon>,
	},
];
export const contentTabItems = [
	{
		name: "general",
		title: "General",
		icon: <PresetIcon></PresetIcon>,
	},
	{
		name: "styles",
		title: "Style",
		icon: <StylesIcon></StylesIcon>,
	},
];

export const iconImageTabItems = [
	{
		name: "general",
		title: "General",
		icon: <PresetIcon></PresetIcon>,
	},
	{
		name: "styles",
		title: "Style",
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
export const iconTabItems = [
	{
		name: "iconSet",
		title: "Icon Set",
		icon: <ListIcon></ListIcon>,
	},
	{
		name: "custom",
		title: "Custom",
		icon: <DescriptionListIcon></DescriptionListIcon>,
	},
];
export const iconBackgroundTabsItems = [
	{
		name: "square",
		title: "Square",
		icon: <Square></Square>,
	},
	{
		name: "circle",
		title: "Circle",
		icon: <CircleSolid></CircleSolid>,
	},
	{
		name: "diamond",
		title: "Diamond",
		icon: <Diamond></Diamond>,
	},
	{
		name: "triangle",
		title: "Triangle",
		icon: <Triangle></Triangle>,
	},
	{
		name: "circleCurve",
		title: "CircleCurve",
		icon: <CircleCurve></CircleCurve>,
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
export const iconAlignmentTabItems = [
	{
		name: "top",
		title: "Top",
		icon: <TopAlignment></TopAlignment>,
	},
	{
		name: "center",
		title: "Center",
		icon: <MiddleAlignMent></MiddleAlignMent>,
	},
	{
		name: "bottom",
		title: "Bottom",
		icon: <BottomAlignment></BottomAlignment>,
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
export const iconPosition = [
	{
		label: "Before",
		value: "before",
	},
	{
		label: "After",
		value: "after",
	},
	{
		label: "Top",
		value: "top",
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
export const imageScales = [
	{
		name: "auto",
		title: "None",
		icon: <Solid></Solid>,
	},
	{
		name: "cover",
		title: "Cover",
		icon: <Gradient></Gradient>,
	},
	{
		name: "contain",
		title: "Contain",
		icon: <Image></Image>,
	},
];

export const tags = [
	{
		label: "Default",
		value: "p",
	},
	{
		label: "Heading h1",
		value: "h1",
	},
	{
		label: "Heading h2",
		value: "h2",
	},
	{
		label: "Heading h3",
		value: "h3",
	},
	{
		label: "Body",
		value: "body",
	},
];

export const fontFamilyOptions = [
	{ label: "Roboto", value: "Roboto" },
	{ label: "Tahoma", value: "Tahoma" },
	{ label: "Arial", value: "Arial" },
	{ label: "Georgia", value: "Georgia" },
	{ label: "Times New Roman", value: "Times New Roman" },
	{ label: "Courier New", value: "Courier New" },
	{ label: "Verdana", value: "Verdana" },
];
export const fontWeight = [
	{ label: "200", value: "200" },
	{ label: "400", value: "400" },
	{ label: "600", value: "600" },
	{ label: "800", value: "800" },
];

export const contentEffectItems = [
	{
		name: "normal",
		title: "Normal",
		icon: <ListIcon></ListIcon>,
	},
	{
		name: "hover",
		title: "Hover",
		icon: <DescriptionListIcon></DescriptionListIcon>,
	},
];
