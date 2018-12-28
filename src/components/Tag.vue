<template>
	<v-chip 
		:small="!editable"
		:close="editable"
		:outline="!isColor"
		:disabled="!editable"
		:color="chipColor"
		:text-color="chipTextColor"
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
		},
		isColor: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: 'primary'
		}
	},
	computed: {
		chipColor() {
			if (!this.isColor) return;

			return this.color;
		},
		chipTextColor() {
			if (this.isColor) return;

			return this.color;
		}
	}
}
</script>

<style>

</style>
