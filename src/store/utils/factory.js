export class Tag {
	constructor(name, category, color = null) {
		this.name = name;
		this.category = category;
		this.color = color;
	}
}

export class Category {
	constructor(name, color, showText = true) {
		this.name = name;
		this.color = color;
		this.showText = showText;
	}
}

export class Item {
	constructor(tags = [], timestamp = Date.now().valueOf()) {
		this.tagIds = [...tags];
		this.timestamp = timestamp;
	}
}