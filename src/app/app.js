import grid from '@/components/grid/grid.vue';

export default {
	name: 'App',

	components: {
		grid
	},

	data: () => ({}),
	created() {
		this.$vuetify.theme.dark = true;
	}
};
