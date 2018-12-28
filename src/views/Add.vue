<template>
	<v-container>
	<v-layout>
		<v-flex xs12>
			<v-menu
				lazy
				transition="scale-transition"
				close-on-content-click
				offset-y
			>
				<v-text-field
					slot="activator"
					v-model="date"
					label="Datum"
					prepend-icon="event"
					readonly
				></v-text-field>
				<v-date-picker v-model="date"></v-date-picker>
			</v-menu>
			<v-menu
				lazy
				transition="scale-transition"
				close-on-content-click
				offset-y
			>
				<v-text-field
					slot="activator"
					v-model="time"
					label="Tijd"
					prepend-icon="access_time"
					readonly
					dark
					
				/>
				<v-time-picker
					v-model="time"
					format="24hr"
					dark
					header-color="#243447"
					color="#243447"
				/>
			</v-menu>
			<h2 class="title font-weight-regular mt-1 mb-3">Tags</h2>
			<div
				column
				v-for="(cat, catName) in tagsByCategory"
				:key="catName"
			>
				<h3 class="tag-title subheader font-weight-light text-capitalize my-2">{{catName}}</h3>
				<v-divider/>
				<div class="checkbox-wrapper py-1">
					<v-checkbox
						class="checkbox py-1 my-1"
						v-model="chosenTags"
						v-for="tag in cat"
						:key="tag.id"
						:value="tag.id"
						:label="String(tag.name)"
						hide-details
						:ripple="false"
					></v-checkbox>
				</div>
				<!-- 
				<v-flex xs-12>
					<v-checkbox
						v-model="chosenTags"
						v-for="tag in tagsInCategory(cat.name)"
						:key="tag.id"
						:value="tag.name"
						:label="String(tag.name)"
					></v-checkbox>
				</v-flex> -->
			</div>
		</v-flex>
	</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			date: new Date().toISOString().substr(0, 10),
			time: `${new Date().getHours()}:${('00' + new Date().getMinutes()).slice(-2)}`,
			chosenTags: []
		}
	},
	computed: {
		allTags() {
			return this.$store.state.tags;
		},
		tagCategories() {
			return this.$store.state.tagCategories;
		},
		tagsByCategory() {
			return this.allTags.reduce((list, tag) => {
				if (list[tag.category]) {
					list[tag.category].push(tag);
				} else {
					list[tag.category] = [tag];
				}
				return list;
			}, {});
		}
	},
	methods: {
		parseTimeForExport() {
			return new Date(`${this.date} ${this.time}`).valueOf();
		},
		saveEntryToStore() {
			const timestamp = this.parseTimeForExport();
			const tagIds = [...this.chosenTags];
			this.$store.dispatch('addNewItem', {timestamp, tagIds});
		}
	},
	beforeMount() {
		this.$vuetify.goTo(0);
	},
	beforeRouteLeave(to, from, next) {
		this.saveEntryToStore();
		next();
	}
}
</script>

<style scoped>
.checkbox-wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
}

.checkbox {
	flex: 0 0 auto;
	min-width: 4.5rem;
}

.checkbox:not(:last-child) {
	padding-right: 1em;
}

.tag-title {
	opacity: 0.9;
}
</style>
