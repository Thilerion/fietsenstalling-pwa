<template>
<v-toolbar class="toolbar" app color="#243447" fixed :flat="!showToolbarShadow" :class="{'toolbar-border': !showToolbarShadow}">

	<v-toolbar-side-icon v-if="isMainPage"></v-toolbar-side-icon>

	<v-btn icon to="/" v-else-if="isAddPage">
		<v-icon>arrow_back</v-icon>
	</v-btn>

	<v-toolbar-title>
		<span class="font-weight-light">{{title}}</span>
	</v-toolbar-title>

	<v-spacer></v-spacer>

	<v-btn v-if="isMainPage" icon>
		<v-icon>refresh</v-icon>
	</v-btn>
	<v-btn v-if="isMainPage" icon to="/add">
		<v-icon>add</v-icon>
	</v-btn>

	<v-btn v-if="isAddPage" icon>
		<v-icon>done</v-icon>
	</v-btn>

</v-toolbar>
</template>

<script>
export default {
	props: ['showToolbarShadow'],
	computed: {
		currentRoute() {
			return this.$route.name;
		},
		isAddPage() {
			return this.currentRoute === "add";
		},
		isMainPage() {
			return this.currentRoute === "home";
		},
		title() {
			if (this.isAddPage) {
				return "Toevoegen";
			} else if (this.isMainPage) {
				return "Fietsenstalling";
			}
		}
	}
}
</script>

<style>

</style>
