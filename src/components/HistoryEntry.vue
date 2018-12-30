<template>
	<v-list-tile @click="$emit('selectTile')" ripple>
		<v-list-tile-content>
			<v-list-tile-title>{{date}} <span class="time">{{time}}</span></v-list-tile-title>
			<v-list-tile-sub-title>
				<tag v-for="tag in tags" :key="tag.id" :color="tag.color" :isColor="false">{{tag.name}}</tag>
			</v-list-tile-sub-title>
		</v-list-tile-content>
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
</style>
