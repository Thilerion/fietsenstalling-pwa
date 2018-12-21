<template>
    <v-layout
      row
    >
      <v-flex xs12>
        <v-list three-line>
			<v-subheader>Meest recent</v-subheader>
			<v-divider/>
			<v-list-tile @click="" ripple>
				<v-list-tile-content>
					<v-list-tile-title>Laatste keer</v-list-tile-title>
					<v-list-tile-sub-title>Subtitle meest recent</v-list-tile-sub-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-subheader>Eerder</v-subheader>
			<v-divider/>
			<template v-for="n in 50">
				<v-list-tile :key="n" @click="" ripple>
					<v-list-tile-content>
						<v-list-tile-title>Title</v-list-tile-title>
						<v-list-tile-sub-title>Subtitle</v-list-tile-sub-title>
					</v-list-tile-content>
				</v-list-tile>
				<!-- <v-divider :key="`d-${n}`"/> -->
			</template>
        </v-list>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
   
  }
</script>

<style>

</style>
