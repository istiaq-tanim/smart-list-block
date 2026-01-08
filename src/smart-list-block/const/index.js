import PresetIcon from "../assets/PresetIcon";
import StylesIcon from "../assets/StylesIcon";
import ListIcon from "../assets/NormalListIcon";
import DescriptionListIcon from "../assets/DescriptionListIcon";
import RightAlign from "../assets/RightAlign";
import MiddleAlign from "../assets/MiddleAlign";
import LeftAlign from "../assets/LeftAlign";

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
		name: "middle",
		title: "Middle",
		icon: <MiddleAlign></MiddleAlign>,
	},
	{
		name: "right",
		title: "Right",
		icon: <RightAlign></RightAlign>,
	},
];
