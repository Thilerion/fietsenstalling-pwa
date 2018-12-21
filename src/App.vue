<template>
	<v-app dark>
		<v-toolbar class="toolbar" app color="#243447" absolute>

			<v-toolbar-title class="text-uppercase">
				<span class="font-weight-light">Fietsenstalling</span>

			</v-toolbar-title>

			<v-spacer></v-spacer>

			<!-- <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
				<span>Latest Release</span>
			</v-btn> -->

		</v-toolbar>

		<v-content v-scroll="showShadowOnScroll">
			
			<router-view/>

		</v-content>
	</v-app>
</template>

<script>
export default {
	name: "App",
	components: {
		
	},
	data() {
		return {
			distanceFromTop: null	
		}
	},
	computed: {
		showToolbarShadow() {
			return this.distanceFromTop > 100;
		}
	},
	methods: {
		showShadowOnScroll(e) {
			this.distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
		}
	}
};
</script>

<style>
.toolbar {
	border-bottom: 
}
</style>

