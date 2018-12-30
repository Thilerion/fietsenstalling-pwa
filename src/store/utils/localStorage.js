import { baseCategories, baseTags, baseItems } from './defaults';

function load() {
	const tagCategories = localStorage.getItem('tagCategories');
	const tags = localStorage.getItem('tags');
	const items = localStorage.getItem('items');

	if (tagCategories == null || tags == null || items == null) {
		return { tagCategories: baseCategories, tags: baseTags, items: baseItems };
	}

	else return { tagCategories, tags, items };
}

export default load;