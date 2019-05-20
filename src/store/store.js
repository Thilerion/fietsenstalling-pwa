import Vue from 'vue'
import Vuex from 'vuex'
import { Tag, HistoryItem } from './utils/factory';
import { loadFromStorage, persistPlugin } from './utils/localStorage';

Vue.use(Vuex);

const store = new Vuex.Store({
	plugins: [persistPlugin],
	state: {
		tagCategories: [
			
		],
		tags: [
			
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
		nextTagId(state, getters) {
			if (state.tags.length <= 0) return 0;
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
		},
		spliceItem(state, idx) {
			state.items.splice(idx, 1);
		}
	},
	actions: {
		addNewTag({ getters, commit }, {name, color, category}) {
			const tag = { name, color, category, id: getters.nextTagId };
			commit('pushNewTag', tag);
		},
		addNewItem({ getters, commit }, {timestamp = Date.now(), tagIds = []}) {
			for (const tag of tagIds) {
				if (!getters.tagIds.includes(tag)) {
					throw new Error("This tag does not exist!");
				}
			}

			commit('pushItem', new HistoryItem(tagIds, timestamp));
		},
		deleteItem({ state, commit }, id) {
			const idx = state.items.findIndex(item => item.id === id);
			if (idx != null) {
				commit('spliceItem', idx);
			} else {
				console.log(id);
			}
		}
	}
})

store.replaceState(loadFromStorage());

export default store;
