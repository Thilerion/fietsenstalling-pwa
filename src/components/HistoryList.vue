<template>
    <v-layout
      row
    >
      <v-flex xs12>
        <v-list three-line :style="{'background-color': '#1b2836'}">
			<v-subheader>Meest recent</v-subheader>
			<v-divider/>
			<v-list-tile @click="selectTile" ripple>
				<v-list-tile-content>
					<v-list-tile-title>Laatste keer</v-list-tile-title>
					<v-list-tile-sub-title>Subtitle meest recent</v-list-tile-sub-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-subheader>Eerder</v-subheader>
			<v-divider/>
			<template v-for="(item, index) in items">
				<history-entry :key="index" :item="item" />
			</template>
        </v-list>
      </v-flex>
    </v-layout>
</template>

<script>
import Tag from './Tag.vue';
import HistoryEntry from './HistoryEntry.vue';

export default {
	components: {
		Tag,
		HistoryEntry
	},
	computed: {
		items() {
			return this.$store.state.items;
		}
	},
	methods: {
		selectTile(e) {

		}
	}
}
</script>

<style>

</style>
