<template>
	<v-container>
	<v-layout>
		<v-flex xs12>
			<v-menu
				lazy
				transition="scale-transition"
				close-on-content-click
				offset-y
			>
				<v-text-field
					slot="activator"
					v-model="date"
					label="Datum"
					prepend-icon="event"
					readonly
				></v-text-field>
				<v-date-picker v-model="date"></v-date-picker>
			</v-menu>
			<v-menu
				lazy
				transition="scale-transition"
				close-on-content-click
				offset-y
			>
				<v-text-field
					slot="activator"
					v-model="time"
					label="Tijd"
					prepend-icon="access_time"
					readonly
					dark
					
				/>
				<v-time-picker
					v-model="time"
					format="24hr"
					dark
					header-color="#243447"
					color="#243447"
				/>
			</v-menu>
			<v-subheader :style="{'padding-left': 0}">Tags</v-subheader>
		</v-flex>
	</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			date: new Date().toISOString().substr(0, 10),
			time: `${new Date().getHours()}:${new Date().getMinutes()}`,
			tags: []
		}
	},
	beforeMount() {
		const date = new Date();
		this.day = date.getDate();
		this.month = date.getMonth() + 1;
		this.year = date.getFullYear();
		this.hour = date.getHours();
		this.minute = date.getMinutes();
	},
	beforeRouteLeave(to, from, next) {
		console.log("WOAH");
		next(false);
	}
}
</script>

<style scoped>

</style>
