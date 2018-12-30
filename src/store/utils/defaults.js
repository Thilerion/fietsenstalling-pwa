import { Tag } from "./factory";

const baseCategories = [
	{
		name: "label",
		color: "#FFFFFF",
		order: 0,
		showText: false
	},
	{
		name: "path",
		color: "#f0a8a8",
		order: 1,
		showText: true
	},
	{
		name: "column",
		color: "#a3f5a3",
		order: 2,
		showText: true
	},
	{
		name: "direction",
		color: "#b6b6fb",
		order: 3,
		showText: true
	},
	{
		name: "other",
		color: "#f2d9f2",
		order: 4,
		showText: true
	}
];

const baseTags = [
	{
		category: "label",
		color: "#ef6c00", //orange
		name: "orange",
		id: 0
	},
	{
		category: "label",
		color: "#ffeb3b", //yellow
		name: "yellow",
		id: 1
	},
	{
		category: "label",
		color: "#1976d2", //blue
		name: "blue",
		id: 2
	}
];

const baseItems = [];

function createTags(names, category, lastId) {
	const tags = [];

	for (let i = 0, id = lastId; i < names.length; i++, id++) {
		const tag = new Tag(names[i], category, null);
		tag.id = id;
		tags.push(tag);
	}
	return tags;
}

baseTags.push(...createTags([1, 2, 3, 4, 5, 6, 7, 8], 'path', baseTags[baseTags.length - 1].id + 1));

baseTags.push(...createTags(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'voor', 'achter'], 'column', baseTags[baseTags.length - 1].id + 1));

baseTags.push(...createTags(['boven', 'onder', 'links', 'rechts'], 'direction', baseTags[baseTags.length - 1].id + 1));

export { baseCategories, baseTags, baseItems };