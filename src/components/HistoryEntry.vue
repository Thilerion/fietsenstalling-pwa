<template>
	<v-list-tile>
		<v-list-tile-content>
			<v-list-tile-title>{{date}} <span class="time">{{time}}</span></v-list-tile-title>
			<v-list-tile-sub-title>
				<span class="tags">
					<tag v-for="tag in tags" :key="tag.id" :color="colors(tag)" :showText="categoryForTag(tag.category).showText">{{tag.name}}</tag>
				</span>
			</v-list-tile-sub-title>
		</v-list-tile-content>
		<v-list-tile-action>
			<v-btn icon ripple @click="deleteItem">
				<v-icon class="del-icon">close</v-icon>
			</v-btn>
		</v-list-tile-action>
	</v-list-tile>
</template>

<script>
import Tag from './Tag.vue';

export default {
	props: ['item'],
	components: {
		Tag
	},
	data() {
		return {
			date: null,
			time: null
		}
	},
	computed: {
		tagIds() {
			return this.item.tagIds;
		},
		tags() {
			return this.$store.getters.tagsById.filter(val => {
				return this.tagIds.includes(val.id);
			})
		},
		categories() {
			return this.$store.state.tagCategories;
		}
	},
	methods: {
		categoryForTag(name) {
			return this.categories.find(cat => cat.name === name);
		},
		colors(tag) {
			if (tag.color) return tag.color;
			
			const category = this.categoryForTag(tag.category);

			return category.color;
		},
		deleteItem() {
			this.$store.dispatch('deleteItem', this.item.id);
		}
	},
	created() {
		this.date = new Date(this.item.timestamp).toLocaleString('nl-nl', {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		});
		this.time = new Date(this.item.timestamp).toLocaleTimeString('nl-nl', {
			hour: '2-digit',
			minute: '2-digit'
		});
	}
}
</script>

<style scoped>
.time {
	opacity: 0.7;
	font-size: 0.875em;
}

.tags {
	display: inline-flex;
	flex-wrap: wrap;
}

.del-icon {
	opacity: 0.4;
}
</style>
