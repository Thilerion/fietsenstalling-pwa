import { baseCategories, baseTags, baseItems } from './defaults';
import { Item } from './factory';

function loadFromStorage() {
	const tagCategories = localStorage.getItem('tagCategories');
	const tags = localStorage.getItem('tags');
	const items = localStorage.getItem('items');

	if (tagCategories == null || tags == null || items == null) {
		console.warn("Items not found in storage, loading defaults");
		return { tagCategories: baseCategories, tags: baseTags, items: baseItems };
	}

	const parsedItems = JSON.parse(items).map(item => new Item(item.tagIds, item.timestamp));

	return {
		tagCategories: JSON.parse(tagCategories),
		tags: JSON.parse(tags),
		items: parsedItems
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