<template>
	<v-app dark>
		<v-toolbar class="toolbar" app color="#243447" fixed :flat="!showToolbarShadow" :class="{'toolbar-border': !showToolbarShadow}">

			<v-toolbar-side-icon></v-toolbar-side-icon>

			<v-toolbar-title>
				<span class="font-weight-light">Fietsenstalling</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>refresh</v-icon>
			</v-btn>
			<v-btn icon to="/add">
				<v-icon>add</v-icon>
			</v-btn>

		</v-toolbar>

		<v-content v-scroll="showShadowOnScroll">
			
			<v-slide-y-transition mode="out-in">
			<router-view/>
			</v-slide-y-transition>

		</v-content>

		<!-- WIP bottom action bar -->
		<bottom-action-bar v-if="false" />
	</v-app>
</template>

<script>
import BottomActionBar from './components/BottomActionBar';

export default {
	name: "App",
	components: {
		BottomActionBar
	},
	data() {
		return {
			distanceFromTop: null	
		}
	},
	computed: {
		showToolbarShadow() {
			return this.distanceFromTop > 0;
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
.toolbar-border {
	border-bottom: 1px solid hsla(211, 33%, 16%, 0.5) !important;
}
</style>

