import Vue from 'vue'
import Vuex from 'vuex'
import { Tag, Item } from './utils/factory';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		tagCategories: [
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
		],
		tags: [
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
		],
		items: [

		]
	},
	getters: {
		tagsById: state => [...state.tags].sort((a, b) => a.id - b.id),
		tagIds: state => state.tags.reduce((ids, tag) => {
			ids.push(tag.id);
			return ids;
		}, []),
		nextTagId(_, getters) {
			const tagsById = getters.tagsById;
			const lastTag = tagsById[tagsById.length - 1].id;

			return lastTag == null ? 0 : lastTag + 1;
		}
	},
	mutations: {
		pushNewTag(state, tag) {
			state.tags.push(tag);
		},
		pushItem(state, item) {
			state.items.push(item);
		}
	},
	actions: {
		addNewTag({ getters, commit }, {name, color, category}) {
			const tag = { name, color, category, id: getters.nextTagId };
			commit('pushNewTag', tag);
		},
		addNewItem({ getters, commit }, {timestamp = Date.now().valueOf(), tagIds = []}) {
			for (const tag of tagIds) {
				if (!getters.tagIds.includes(tag)) {
					throw new Error("This tag does not exist!");
				}
			}

			commit('pushItem', new Item(tagIds, timestamp));
		}
	}
})

function createTags(names, category) {
	const tags = [];
	names.forEach(name => tags.push(new Tag(name, category, null)));
	return tags;
}

const pathTags = createTags([1, 2, 3, 4, 5, 6, 7, 8], 'path');
const columnTags = createTags(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'front', 'back'], 'column');
const directionTags = createTags(['top', 'bottom', 'left', 'right'], 'direction');

[...pathTags, ...columnTags, ...directionTags].forEach(tag => {
	store.dispatch('addNewTag', tag);
})

export default store;
