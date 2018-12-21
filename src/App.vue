<template>
	<v-app dark>
		<toolbar :showToolbarShadow="showToolbarShadow">
			<template slot="buttons">
				
			</template>

		</toolbar>

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
import Toolbar from './components/toolbars/Toolbar';

export default {
	name: "App",
	components: {
		BottomActionBar,
		Toolbar
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

