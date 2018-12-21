<template>
	<v-chip 
		:small="!editable"
		:close="editable"
		:outline="!isColor"
		:disabled="!editable"
		:color="isColor ? 'primary' : null"
		:text-color="isColor ? 'white' : null"
	>
		<slot/>
	</v-chip>
</template>

<script>
export default {
	props: {
		editable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isColor() {
			return false;
		}
	}
}
</script>

<style>

</style>
