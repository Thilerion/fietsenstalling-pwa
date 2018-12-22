import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		tagCategories: [
			{
				name: "label",
				color: "#FFFFFF",
				order: 0
			},
			{
				name: "path",
				color: "#FF0000",
				order: 1
			},
			{
				name: "column",
				color: "#00FF00",
				order: 2
			},
			{
				name: "direction",
				color: "#0000FF",
				order: 3
			},
			{
				name: "other",
				color: "#FF00FF",
				order: 4
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
		nextTagId(_, getters) {
			const tagsById = getters.tagsById;
			const lastTag = tagsById[tagsById.length - 1].id;

			return lastTag == null ? 0 : lastTag + 1;
		}
	},
	mutations: {
		pushNewTag(state, tag) {
			state.tags.push(tag);
		}
	},
	actions: {
		addNewTag({ getters, commit }, {name, color, category}) {
			const tag = { name, color, category, id: getters.nextTagId };
			commit('pushNewTag', tag);
		},
		addNewItem({ getters, commit }, {date = Date.now(), tagIds = []}) {
			for (const tag of tagIds) {
				if (!getters.tagIds.includes(tag)) {
					throw new Error("This tag does not exist!");
				}
			}

			const item = {
				date,
				tagIds
			}

			commit('pushItem', item);
		}
	}
})

function createTags(names, category) {
	const tags = [];
	names.forEach(name => tags.push({
		category,
		color: null,
		name
	}));
	return tags;
}

const pathTags = createTags([1, 2, 3, 4, 5, 6, 7, 8], 'path');
const columnTags = createTags(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'front', 'back'], 'column');
const directionTags = createTags(['top', 'bottom', 'left', 'right'], 'direction');

[...pathTags, ...columnTags, ...directionTags].forEach(tag => {
	store.dispatch('addNewTag', tag);
})

export default store;
