import { baseCategories, baseTags, baseItems } from './defaults';

function loadFromStorage() {
	const tagCategories = localStorage.getItem('tagCategories');
	const tags = localStorage.getItem('tags');
	const items = localStorage.getItem('items');

	if (tagCategories == null || tags == null || items == null) {
		console.warn("Items not found in storage, loading defaults");
		return { tagCategories: baseCategories, tags: baseTags, items: baseItems };
	}

	else return {
		tagCategories: JSON.parse(tagCategories),
		tags: JSON.parse(tags),
		items: JSON.parse(items)
	};
}

function saveToStorage(state) {
	for (const prop in state) {
		localStorage.setItem(prop, JSON.stringify(state[prop]));
	}
}

const persistPlugin = store => {
	store.subscribe((mutation, state) => {
		saveToStorage(state);
	})
}

export {loadFromStorage, persistPlugin};