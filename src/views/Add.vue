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
			<h2 class="title font-weight-regular">Tags</h2>
			<div
				column
				v-for="(cat, catName) in tagsByCategory"
				:key="catName"
			>
				<h3 class="subheading font-weight-light">{{catName}}</h3>
				<v-layout row wrap>
					<v-checkbox
						v-model="chosenTags"
						v-for="tag in cat"
						:key="tag.id"
						:value="tag.name"
						:label="String(tag.name)"
						height="0"
					></v-checkbox>
				</v-layout>
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
	beforeRouteLeave(to, from, next) {
		console.log("WOAH");
		next();
	}
}
</script>

<style scoped>

</style>
