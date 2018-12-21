import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function createTag({id, name}) {
	return {
		id: 0,
		name: '',
		type: '',
		primaryColor: '',
		textColor: ''
	}
}

export default new Vuex.Store({
	state: {
		tagTypes: [
			'color',
			'path',
			'column',
			'side',
			'other'
		],
		tags: {

		},
		items: [

		]
	},
	getters: {
		tagIds: state => Object.keys(state.tags).map(id => parseInt(id)).sort((a, b) => a - b),
		lastTagId: (_, getters) => getters.tagIds[getters.tagIds.length - 1]
	},
	mutations: {
		pushTag(state, tag) {
			const id = tag.id;
			state.tags = { ...state.tags, [id]: tag };
		},
		pushItem(state, item) {
			state.items.push(item);
		}
	},
	actions: {
		addNewTag({ state, getters, commit }, {name, tagType}) {
			if (tagType == null || !state.tagTypes.includes(tagType)) {
				tagType = "other";
			}

			const id = getters.lastTagId == null ? 0 : (getters.lastTagId + 1);
			const primaryColor = "blue";
			const textColor = "white";

			const tag = {
				id,
				name,
				tagType,
				primaryColor,
				textColor
			};

			commit('pushTag', tag);
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
