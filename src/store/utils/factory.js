function createId(baseNum = Date.now(), baseStr = '') {
	return `${baseStr}${Math.round(baseNum / 10000)}-${Math.floor(Math.random() * 10000)}`;
}

// Tag for location, carries ID of tagCategory
export class Tag {
	constructor(name, id, category, color = null) {
		this.name = name;
		this.category = category;
		this.color = color;
	}
}

// TagCategory used to group tags together, belongs to one parking location only
export class TagCategory {
	constructor(name, color, id, showText = true) {
		this.name = name;
		this.color = color;
		this.showText = showText;
		this.id = id;
	}
}

// Bike to differentiate between multiple bikes, with each one having its own history of parking locations
export class Bike {
	constructor({name, id, primary = false}) {
		this.name = name;
		this.primary = primary;
		this.history = [];
		this.id = id;
	}
}

export class Location {
	constructor({ name, id }) {
		this.name = name;
		this.id = id;
		this.tagCategories = [];
		this.tags = [];
	}
}

// History item for where the bike is parked, belongs to one bike only
// TODO: locationId defaults to primary location
export class HistoryItem {
	constructor(tags = [], timestamp = Date.now(), locationId) {
		this.tagIds = [...tags];
		this.timestamp = timestamp;
		this.id = `${timestamp / 10000}-${Math.floor(Math.random() * 10000)}`;
		this.locationId = locationId;
	}
}