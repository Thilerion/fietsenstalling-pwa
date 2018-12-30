<template>
	<!-- <v-chip 
		:small="!editable"
		:close="editable"
		:outline="!isColor"
		:disabled="!editable"
		:color="chipColor"
		:text-color="chipTextColor"
	>
		<slot/>
	</v-chip> -->
	<div class="tag mr-1 caption font-weight-bold" :class="tagClasses" :style="tagStyle">
		<slot v-if="showText" />
	</div>
</template>

<script>
export default {
	props: {
		editable: {
			type: Boolean,
			default: false
		},
		color: {
			type: String,
			default: 'primary'
		},
		showText: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		tagClasses() {
			const classes = [];
			
			if (!this.showText) {
				classes.push('round');
			} else {
				classes.push('wide');
			}

			return classes;
		},
		tagStyle() {
			const styles = {};

			if (this.showText) {
				styles['border-color'] = this.color;
				styles['color'] = this.color;
			} else {
				styles['border-color'] = this.color;
				styles['background-color'] = this.color;
			}
			return styles;
		}
	}
}
</script>

<style scoped>
.tag {
	height: 1.5em;
	border: 1px solid white;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0.75em;
}

.round {
	border-radius: 50%;
	width: 1.5em;	
}

.wide {
	border-radius: 10px;
	min-width: 1.5em;
	width: auto;
}
</style>
