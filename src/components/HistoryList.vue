<template>
    <v-layout
      row
    >
      <v-flex xs12>
        <v-list three-line :style="{'background-color': '#1b2836'}">
			<v-subheader>Meest recent</v-subheader>
			<v-divider/>
			<!-- <transition :key="mostRecentItem.timestamp" name="fade-item"> -->
			<history-entry v-if="mostRecentItem" :item="mostRecentItem" />
			<!-- </transition> -->
			<v-list-tile @click="selectTile" v-else ripple>
				<v-list-tile-content>
					<v-list-tile-title>Nog niets!</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-subheader v-if="pastItems">Eerder</v-subheader>
			<v-divider v-if="pastItems" />
			<template v-if="pastItems" v-for="(item, index) in pastItems">
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
			return [...this.$store.state.items].sort((a, b) => {
				return b.timestamp - a.timestamp;
			});
		},
		mostRecentItem() {
			if (this.items.length > 0) return this.items[0];
		},
		pastItems() {
			if (this.items.length > 1) return this.items.slice(1);
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
