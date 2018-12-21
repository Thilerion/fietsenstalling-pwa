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
			<template v-for="n in 50">
				<v-list-tile :key="n" @click="selectTile" ripple>
					<v-list-tile-content>
						<v-list-tile-title>Title</v-list-tile-title>
						<tag>Tag test</tag>
					</v-list-tile-content>
				</v-list-tile>
			</template>
        </v-list>
      </v-flex>
    </v-layout>
</template>

<script>
import Tag from './Tag.vue';

export default {
	components: {
		Tag
	},
	methods: {
		selectTile(e) {

		}
	}
}
</script>

<style>

</style>
