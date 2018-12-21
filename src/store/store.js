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
		lastTagId: (state, getters) => getters.tagIds[getters.tagIds.length - 1] || 0
	},
	mutations: {
		pushTag(state, tag) {
			const id = tag.id;
			state.tags = { ...state.tags, [id]: tag };
		}
	},
	actions: {
		addNewTag({ state, getters, commit }, {name, tagType}) {
			if (tagType == null || !state.tagTypes.includes(tagType)) {
				tagType = "other";
			}

			const id = getters.lastTagId + 1;
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
		}
	}
})
