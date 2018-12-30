import Vue from 'vue'
import Vuex from 'vuex'
import { Tag, Item } from './utils/factory';
import { baseCategories, baseTags, baseItems } from './utils/defaults';

Vue.use(Vuex);

const store = new Vuex.Store({
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

store.replaceState({ tagCategories: baseCategories, tags: baseTags, items: baseItems });

export default store;
